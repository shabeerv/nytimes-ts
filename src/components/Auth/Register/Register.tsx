import { useEffect, Fragment } from "react";
import { useFormik } from "formik";
import { schema } from "../../../helpers/validation";
import InputField from "../../common/InputField";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  register,
  actionTypes as userActions,
} from "../../../actions/userAction";
import { successSelector } from "../../../selectors/statusSelector";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { authTypes, path } from "../../../helpers/constants";
import strings from "../../../localization";

const initialValues = {
  email: "",
  password: "",
};

const labels = {
  email: strings.email,
  password: strings.password,
};

interface IValueProps {
  email: string;
  password: string;
}

export default function Register() {
  const isSuccess = useAppSelector((state) =>
    successSelector([userActions.REGISTER], state)
  );

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
      navigate(path.HOME);
    }
    //eslint-disable-next-line
  }, [isSuccess]);

  return (
    <AuthLayout
      title={strings.signUp}
      formik={formik}
      authType={authTypes.register}
    >
      {Object.keys(initialValues).map((key) => {
        const label = labels[key as keyof IValueProps];

        return (
          <Fragment key={key}>
            <InputField
              key={key}
              name={key}
              placeholder={`${strings.enterText} ${label}`}
              handleChange={formik.handleChange}
              label={label}
              formik={formik}
            />
          </Fragment>
        );
      })}
    </AuthLayout>
  );
}
