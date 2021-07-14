import { createAction, createReducer } from "../../helpers/redux";

// ACTION TYPES
const SET_GLOBAL_DATA = "SET_GLOBAL_DATA";
const SET_LANGUAGE = "SET_LANGUAGE";

// ACTIONS
export const setGlobalData = createAction(SET_GLOBAL_DATA);
export const setLanguage = createAction(SET_LANGUAGE);

// REDUCER
const initialState = {
  language: null,
  currency: null,
  gameType: null,
};

export const globalInfo = createReducer(initialState, (state, { value }) => ({
    [SET_GLOBAL_DATA]: () => ({ ...state, ...value }),
    [SET_LANGUAGE]: () => ({ ...state, language: value }),
}));