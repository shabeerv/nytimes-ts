import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Text from "../../common/Text";
import Container from "@mui/material/Container";
import { FormikProps } from "formik";
import { styles } from "./styles";
import ErrorAlert from "./ErrorAlert";
import CustomButton from "../../common/CustomButton";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { reset } from "../../../reducers/errorReducer";
import { authTypes, path } from "../../../helpers/constants";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import strings from "../../../localization";

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
    children: authType === authTypes.login ? strings.signIn : strings.signUp,
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

        <Text variant="h5">{title}</Text>

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
                ? strings.signupMessage
                : strings.signinMessage}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthLayout;
