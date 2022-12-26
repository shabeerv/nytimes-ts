import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import Button from "@mui/material/Button";
import CustomButton from "../common/CustomButton";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { style } from "./styles";
import en from "../../localization/en";
import { logout } from "../../actions/userAction";
import SearchBox from "../SearchBox/SearchBox";

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
          <SearchBox />
          <Box sx={style.commonBox} />

          <CustomButton
            text={en.logout}
            color="inherit"
            onClick={logoutClicked}
          />
          {/* <Button color="inherit" onClick={logoutClicked}> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
