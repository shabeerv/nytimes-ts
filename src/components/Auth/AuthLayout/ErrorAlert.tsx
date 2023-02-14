import { getLatestError } from "../../../selectors/errorSelector";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Alert } from "@mui/material";
import { reset } from "../../../reducers/errorReducer";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const ErrorAlert = () => {
  const isError = useAppSelector(getLatestError);
  const dispatch = useAppDispatch();

  return (
    <>
      {isError && (
        <Alert
          severity="error"
          onClose={() => {
            dispatch(reset());
          }}
        >
          {/*@ts-ignore*/}
          {isError?.message}
        </Alert>
      )}
    </>
  );
};
export default ErrorAlert;
