import { createAction, createReducer } from "../../helpers/redux";

// ACTION TYPES
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_ID = "SET_USER_ID";
const SET_USER_BALANCE = "SET_USER_BALANCE";

// ACTIONS
export const setUserData = createAction(SET_USER_DATA);
export const setUserId = createAction(SET_USER_ID);
export const setUserBalance = createAction(SET_USER_BALANCE);

// REDUCER
const userState = {
    userId: null,
    userBalance: null
};

export const userInfo = createReducer(userState, (state, { value }) => ({
    [SET_USER_DATA]: () => ({...state, ...value}),
    [SET_USER_ID]: () => ({ ...state, userId: value }),
    [SET_USER_BALANCE]: () => ({ ...state, userBalance: value}),
}));
