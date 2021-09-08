import * as actionType from "../constants/actionTypes";
import { isAuthenticated } from "../actions/auth";

var result = null;

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action?.data })
            );

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
            const user = JSON.parse(localStorage.getItem("profile"));

            // Get authentication from Backend
            async function run() {
                result = await isAuthenticated();
            }
            run();

            if (user?.isAuthenticated || result?.isAuthenticated) {
                return {
                    ...state,
                    authData: result === null ? user : result, //if no answer from BE, use LS response
                    loading: false,
                    errors: null,
                };
            } else {
                return state;
            }
    }
};

export default authReducer;
