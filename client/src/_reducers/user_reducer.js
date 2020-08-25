import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_MY_PROJECTS_USER,
    GET_PROJECTS_USER,
    REMOVE_PROJECTS_USER,
    ON_SUCCESS_BUY_USER
} from '../_actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        case LOGOUT_USER:
            return { ...state }
        case ADD_TO_MY_PROJECTS_USER:
            return {
                ...state, userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case GET_PROJECTS_USER:
            return {
                ...state, cartDetail: action.payload
            }
        case REMOVE_PROJECTS_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }

            }
        case ON_SUCCESS_BUY_USER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.cartDetail
            }

        default:
            return state;
    }
}