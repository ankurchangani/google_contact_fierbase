import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
} from '../Action/authAcionType'; // Ensure this path is correct

const initialState = {
    loading: false,
    user: null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_START:
            return { ...state, loading: true, error: null };
        case SIGN_IN_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case SIGN_IN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SIGN_OUT_SUCCESS:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default authReducer;
