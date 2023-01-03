import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CustomButton from "../common/CustomButton";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { style } from "./styles";
import en from "../../localization/en";
import { logout } from "../../actions/userAction";
import SearchInput from "../Search/SearchInput/SearchInput";
import { useState } from "react";
import AlertDialog from "../AlertDialog";
import { muiButtonColors } from "../../helpers/constants";

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
          <SearchInput />
          <Box sx={style.commonBox} />

          <CustomButton
            text={en.logout}
            color={muiButtonColors.inherit}
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
