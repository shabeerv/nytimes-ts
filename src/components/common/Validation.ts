import * as Yup from "yup";

export const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(4, "Password must be at least 4 characters"),
});
