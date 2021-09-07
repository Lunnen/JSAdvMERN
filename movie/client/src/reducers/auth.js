import * as actionType from "../constants/actionTypes";

import { isAuthenticated } from "../actions/auth";

var result = null;

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: null,
      };
    case actionType.LOGOUT:
      localStorage.clear();
      // TODO connect to backend signout to clear cookie
      return { ...state, authData: null, loading: false, errors: null };
    default:
      // Get authentication from Backend
      async function run() {
        result = await isAuthenticated();
      }
      run();

      const data = JSON.stringify(result);

      if (data === null) {
        return state;
      } else {
        return {
          ...state,
          authData: result,
          loading: false,
          errors: null,
        };
      }
  }
};

export default authReducer;
