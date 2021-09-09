import * as actionType from "../constants/actionTypes";
import { isAuthenticated } from "../actions/auth";

var BEprofile = null;

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
            return { ...state, authData: null, loading: false, errors: null };
        default:
            const LSprofile = JSON.parse(localStorage.getItem("profile"));

            // Get authentication from Backend
            async function run() {
                BEprofile = await isAuthenticated();
            }
            run();

            if (LSprofile?.isAuthenticated || BEprofile?.isAuthenticated) {
                return {
                    ...state,
                    authData: LSprofile,
                    loading: false,
                    errors: null,
                };
            }
            if (LSprofile?.isAuthenticated && !BEprofile?.isAuthenticated) {
                localStorage.clear();
                return {
                    ...state,
                    authData: null,
                    loading: false,
                    errors: null,
                };
            } else {
                return state;
            }
    }
};

export default authReducer;
