import { AUTCH_LOGOUT, AUTCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    token: null
}

export default function authReduser(state = initialState, action) {
    switch (action.type) {
        case AUTCH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTCH_LOGOUT:
            
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}