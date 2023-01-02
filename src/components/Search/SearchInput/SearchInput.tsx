import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import en from "../../../localization/en";
import { styles } from "./styles";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { searchResult, updateSearchHistory } from "../../../actions/newsAction";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { searchHistorySelector } from "../../../selectors/newsSelector";
import { useCallback } from "react";
import { debounce } from "@mui/material";

export default function SearchInput() {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(searchHistorySelector);

  // const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   dispatch(searchResult(input));
  //   dispatch(updateSearchHistory(input));
  // };

  const changeHandler = (event: any, value: string) => {
    setInput(value);
    if (value.length > 0 && value !== "") {
      dispatch(searchResult(value));
      dispatch(updateSearchHistory(value));
    }
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 800), []);

  // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event.target.value);
  //   setInput(event.target.value);
  // };

  return (
    <Paper component="form" sx={styles.paper}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        sx={styles.inputBase}
        disableClearable
        options={searchHistory.map((option) => option)}
        getOptionLabel={(option) => option}
        // onSelect={handleInput}
        onInputChange={debouncedChangeHandler}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;
          return (
            <InputBase
              {...rest}
              type="search"
              placeholder={en.searchPlaceholder}
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
