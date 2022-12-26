import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormikProps } from "formik";
import { styles } from "./styles";

interface ILayoutProps {
  title: string;
  formik: FormikProps<any>;
  children: React.ReactNode;
}
const AuthLayout: React.FC<ILayoutProps> = ({ title, formik, children }) => {
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
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default AuthLayout;
