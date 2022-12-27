import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CustomButton from "../common/CustomButton";
import { useFormik } from "formik";
import { schema } from "../common/Validation";
import InputField from "../common/InputField";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { login, actionTypes as userActions } from "../../actions/userAction";
import { successSelector } from "../../selectors/statusSelector";
import { getLatestError } from "../../selectors/errorSelector";
import { useNavigate } from "react-router-dom";
import React from "react";
import { reset } from "../../reducers/errorReducer";
import en from "../../localization/en";
import { Alert } from "@mui/material";
import AuthLayout from "../common/AuthLayout";
import Link from "@mui/material/Link";
import { styles } from "../common/AuthLayout/styles";

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
export default function Login() {
  const isSuccess = useAppSelector((state) =>
    successSelector([userActions.LOGIN], state)
  );
  const isError = useAppSelector(getLatestError);
  const nextRoute = "/";
  const registerRoute = "/register";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      dispatch(login({ email, password }));
      // dispatch(getTopStories({ section }));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(nextRoute);
    }
    //eslint-disable-next-line
  }, [isSuccess]);

  return (
    <AuthLayout title={en.signIn} formik={formik}>
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

      <CustomButton
        text={en.signIn}
        fullWidth={true}
        variant="contained"
        sx={styles.button}
      />
      <Grid container justifyContent="center" item>
        <Link href={registerRoute} variant="body2">
          {en.signupMessage}
          {/* onClick={dispatch(reset())} */}
        </Link>
      </Grid>
    </AuthLayout>
  );
}
