import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import en from "../../localization/en";
import { styles } from "./styles";

export default function SearchBox() {
  return (
    <Paper component="form" sx={styles.paper}>
      <InputBase
        sx={styles.inputBase}
        placeholder={en.searchPlaceholder}
        autoComplete="true"
        inputProps={{ "aria-label": en.searchPlaceholder }}
      />
      <IconButton type="button" sx={styles.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

// import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
// import SearchIcon from "@mui/icons-material/Search";
// import en from "../../localization/en";

// const SearchBox = () => {
//   return (
//     <Search>
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//       <StyledInputBase
//         placeholder={en.searchPlaceholder}
//         inputProps={{ "aria-label": "search" }}
//         onClick={() => console.log("works")}
//       />
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//     </Search>
//   );
// };
// export default SearchBox;
