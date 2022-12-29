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
import { useState } from "react";
import AlertDialog from "../AlertDialog";

export default function Navbar() {
  const [alert, setAlert] = useState(false);
  const dispatch = useAppDispatch();

  const logoutClicked = () => {
    dispatch(logout());
  };

  return (
    <Box sx={style.commonBox}>
      <AppBar position="fixed">
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
            text={en.auth.logout}
            color="inherit"
            onClick={() => setAlert(true)}
          />
          <AlertDialog
            title="Logout"
            open={alert}
            setOpen={setAlert}
            onConfirm={logoutClicked}
          >
            Are you sure that you want to logout?
          </AlertDialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
