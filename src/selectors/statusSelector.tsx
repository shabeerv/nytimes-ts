import { LOADING, NOT_STARTED, ERROR, SUCCESS } from "../helpers/status";
import { StatusTypes } from "../reducers/statusReducer";
import { RootState } from "../store";

export const statusSelector = (action: string, state: RootState) =>
  state.status[action];

export const hasStatusSelector = (
  action: string,
  status: StatusTypes,
  state: RootState
) => state.status[action] === status;

export const notStartedSelector = (actions: string[], state: RootState) =>
  actions.reduce((prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState && status === NOT_STARTED;
  }, true);

export const isLoadingSelector = (actions: string[], state: RootState) =>
  actions.reduce((prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState || status === LOADING;
  }, false);

export const hasErrorsSelector = (actions: string[], state: RootState) =>
  actions.reduce((prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState || status === ERROR;
  }, false);

export const successSelector = (actions: string[], state: RootState) =>
  actions.reduce((prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState && status === SUCCESS;
  }, true);

export const fullStatusSelector = (action: string[], state: RootState) => {
  const status = state.status[`${action}`];
  const error = state.error[`${action}`];
  const isLoading = status === LOADING;
  return {
    status,
    isLoading,
    error,
  };
};
