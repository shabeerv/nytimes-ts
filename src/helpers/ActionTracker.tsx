import { actionTypes as userActions } from "../actions/userAction";
import { actionTypes as newsAction } from "../actions/newsAction";

const ActionTracker = [
  userActions.LOGIN,
  userActions.REGISTER,
  newsAction.GETTOPSTORIES,
  newsAction.SEARCHARTICLE,
  newsAction.CLEARSEARCH,
];

export const loadingList = ActionTracker;

export default ActionTracker;
