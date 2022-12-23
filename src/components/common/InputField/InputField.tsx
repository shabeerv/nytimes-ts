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
  return (
    <>
      {formik.errors[name] && formik.touched[name] ? (
        <TextField
          error
          margin="normal"
          fullWidth
          id={name}
          label={name}
          placeholder={placeholder}
          onChange={handleChange}
          autoComplete="off"
          helperText={formik.errors[name] as React.ReactNode}
        />
      ) : (
        <TextField
          margin="normal"
          fullWidth
          id={name}
          type={name}
          name={name}
          label={label}
          placeholder={placeholder}
          onChange={handleChange}
          autoComplete="off"
        />
      )}
    </>

    //   <div>
    //     {formik.errors[name] && formik.touched[name] && (
    //       <span className="input-error">{formik.errors[name] as React.ReactNode}</span>
    //     )}
    //   </div>
  );
};

export default InputForm;
