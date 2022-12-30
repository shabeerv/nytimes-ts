import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormikProps } from "formik";
import { styles } from "./styles";
import ErrorAlert from "./ErrorAlert";
import CustomButton from "../CustomButton";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import en from "../../../localization/en";
import { reset } from "../../../reducers/errorReducer";
import { authTypes, path } from "../../../helpers/constants";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

interface ILayoutProps {
  title: string;
  formik: FormikProps<any>;
  children: React.ReactNode;
  // isLogin?: boolean;
  authType: authTypes;
}
const AuthLayout: React.FC<ILayoutProps> = ({
  title,
  formik,
  children,
  authType,
}) => {
  const dispatch = useAppDispatch();

  const button = {
    text: authType === authTypes.login ? en.auth.signIn : en.auth.signUp,
    fullWidth: true,
    sx: styles.button,
  };

  const message = {
    href: authType === authTypes.login ? path.REGISTER : path.LOGIN,
    variant: "body2",
    onClick: () => dispatch(reset()),
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={styles.containerBox}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={styles.formBox}
        >
          <ErrorAlert />
          {children}

          <CustomButton {...button} variant="contained" />
          <Grid container justifyContent="center" item>
            <Link {...message} variant="body2">
              {authType === authTypes.login
                ? en.auth.signupMessage
                : en.auth.signinMessage}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthLayout;
