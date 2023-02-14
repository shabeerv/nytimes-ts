import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FormikProps } from "formik";
import React from "react";

interface INewInputProps {
  name: string;
  formik: FormikProps<any>;
  handleChange: React.ChangeEventHandler;
}

type InputProps = INewInputProps & TextFieldProps;

const InputForm: React.FC<InputProps> = ({
  name,
  placeholder,
  handleChange,
  label,
  formik,
}) => {
  const isError = (formik.errors[name] && formik.touched[name]) as boolean;

  return (
    <TextField
      error={isError}
      margin="normal"
      fullWidth
      type={name}
      id={name}
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="off"
      helperText={isError && (formik.errors[name] as React.ReactNode)}
    />
  );
};

export default InputForm;
