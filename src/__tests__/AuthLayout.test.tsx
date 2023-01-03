import React from "react";
import { render, cleanup, screen, getByText } from "@testing-library/react";
import AuthLayout from "../components/common/AuthLayout";
import { authTypes } from "../helpers/constants";
import { useFormik } from "formik";

afterEach(cleanup);

test("renders the component with the correct title", () => {
  const title = "My Title";
  const getByText = screen.getByText(title);
  expect(getByText).toBeInTheDocument();
});

test("renders the children elements", () => {
  const children = <div>My Children</div>;
  const title = "My Title";
  const formik = {
    values: {},
    errors: {},
    touched: {},
    isSubmitting: false,
    isValidating: false,
    submitCount: 0,
    handleSubmit: () => {},
    handleReset: () => {},
    handleBlur: () => {},
    handleChange: () => {},
    setTouched: () => {},
    setErrors: () => {},
    setValues: () => {},
    setFieldValue: () => {},
    setFieldError: () => {},
    setFieldTouched: () => {},
    validateForm: () => {},
    validateField: () => {},
    resetForm: () => {},
  };
  const getByText = screen.getByText("My Children");
  render(
    <AuthLayout title={title} formik={formik} authType={authTypes.login}>
      {children}
    </AuthLayout>
  );
  expect(getByText).toBeInTheDocument();
});
