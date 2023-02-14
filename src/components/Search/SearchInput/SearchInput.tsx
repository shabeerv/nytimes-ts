import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styles } from "./styles";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { searchResult, updateSearchHistory } from "../../../actions/newsAction";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { searchHistorySelector } from "../../../selectors/newsSelector";
import { useCallback } from "react";
import { debounce } from "@mui/material";
import strings from "../../../localization";

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(searchHistorySelector);

  const changeHandler = (event: any, value: string) => {
    if (value.length > 0 && value !== "") {
      dispatch(searchResult(value));
      dispatch(updateSearchHistory(value));
    }
  };

  // eslint-disable-next-line
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  return (
    <Paper component="form" sx={styles.paper}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        sx={styles.inputBase}
        disableClearable
        options={searchHistory.map((option) => option)}
        getOptionLabel={(option) => option}
        onInputChange={debouncedChangeHandler}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;

          return (
            <InputBase
              {...rest}
              type="search"
              placeholder={strings.searchPlaceholder}
              {...params.InputProps}
            />
          );
        }}
      />

      <IconButton type="button" sx={styles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
