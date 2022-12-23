import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Button from "@mui/material/Button";
import { logout } from "../../reducers/userReducer";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Search, SearchIconWrapper, style, StyledInputBase } from "./styles";
import en from "../../localization/en";

export default function Navbar() {
  const dispatch = useAppDispatch();

  const logoutClicked = () => {
    dispatch(logout());
  };

  return (
    <Box sx={style.commonBox}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={style.iconButton}
          >
            <ArticleOutlinedIcon fontSize="large" />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={en.searchPlaceholder}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={style.commonBox} />

          <Button color="inherit" onClick={logoutClicked}>
            {en.logout}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
