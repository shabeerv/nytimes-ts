import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomButton from "../common/CustomButton";
import { useFormik } from "formik";
import { schema } from "../common/Validation";
import InputField from "../common/InputField";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { register, actionTypes as userActions } from "../../actions/userAction";
import { successSelector } from "../../selectors/statusSelector";
import { getLatestError } from "../../selectors/errorSelector";
import { useNavigate, NavLink } from "react-router-dom";
import { avatar, containerBox, formBox } from "./styles";
import React from "react";
import en from "../../localization/en";
import { Alert } from "@mui/material";
import { reset } from "../../reducers/errorReducer";

const initialValues = {
  email: "",
  password: "",
};

const labels = {
  email: "Email",
  password: "Password",
};

interface IValueProps {
  email: string;
  password: string;
}

export default function Register() {
  const isSuccess = useAppSelector((state) =>
    successSelector([userActions.REGISTER], state)
  );
  const isError = useAppSelector(getLatestError);
  const nextRoute = "/";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      dispatch(register({ email, password }));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(nextRoute);
    }
    //eslint-disable-next-line
  }, [isSuccess]);

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={containerBox}>
        <Avatar sx={avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={formBox}
        >
          {Object.keys(initialValues).map((key, i) => {
            const label = labels[key as keyof IValueProps];

            return (
              <React.Fragment key={key}>
                <InputField
                  key={key}
                  name={key}
                  placeholder={`Enter ${label}`}
                  handleChange={formik.handleChange}
                  label={label}
                  formik={formik}
                />
              </React.Fragment>
            );
          })}
          {isError && (
            <Alert
              severity="error"
              onClose={() => {
                dispatch(reset());
              }}
            >
              {/*@ts-ignore*/}
              {isError.message}
            </Alert>
          )}
          <CustomButton text={en.signUp} />
          <Grid container justifyContent="center" item>
            <NavLink to="/login">{en.signinMessage}</NavLink>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
