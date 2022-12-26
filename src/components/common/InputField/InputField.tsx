import TextField from "@mui/material/TextField";
import { FormikProps } from "formik";
import React from "react";

interface IInputProp {
  name: string;
  placeholder?: string;
  label: string;
  handleChange: React.ChangeEventHandler;
  formik: FormikProps<any>;
}

const InputForm: React.FC<IInputProp> = ({
  name,
  placeholder,
  handleChange,
  label,
  formik,
}) => {
  const isError = (formik.errors[name] && formik.touched[name]) as boolean;

  return (
    <>
      <TextField
        error={isError}
        margin="normal"
        fullWidth
        type={name}
        id={name}
        label={name}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        helperText={isError && (formik.errors[name] as React.ReactNode)}
      />
    </>

    //   <div>
    //     {formik.errors[name] && formik.touched[name] && (
    //       <span className="input-error">{formik.errors[name] as React.ReactNode}</span>
    //     )}
    //   </div>
  );
};

export default InputForm;