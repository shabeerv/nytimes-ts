import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CustomButton from "../common/CustomButton";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { style } from "./styles";
import { logout } from "../../actions/userAction";
import SearchInput from "../Search/SearchInput/SearchInput";
import { useState } from "react";
import AlertDialog from "../AlertDialog";
import strings from "../../localization";
import { useNavigate } from "react-router-dom";
import { path } from "../../helpers/constants";

export default function Navbar() {
  const [alert, setAlert] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
            onClick={() => navigate(path.HOME)}
          >
            <ArticleOutlinedIcon fontSize="large" />
          </IconButton>

          <SearchInput />

          <Box sx={style.commonBox} />

          <CustomButton color="inherit" onClick={() => setAlert(true)}>
            {strings.logout}
          </CustomButton>

          <AlertDialog
            title={strings.logout}
            open={alert}
            setOpen={setAlert}
            onConfirm={logoutClicked}
          >
            {strings.logoutConfirm}
          </AlertDialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
