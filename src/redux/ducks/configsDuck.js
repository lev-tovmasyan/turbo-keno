import { createAction, createReducer } from "../../helpers/redux";

// ACTION TYPES
const SET_CONFIGS = "SET_CONFIGS";
const SET_LANGUAGE = "SET_LANGUAGE";

// ACTIONS
export const setConfigs = createAction(SET_CONFIGS);
export const setLanguage = createAction(SET_LANGUAGE);

// REDUCER
const initialState = {
  language: null,
  currency: null,
  gameType: null,
};

export const configs = createReducer(initialState, (state, { value }) => ({
    [SET_CONFIGS]: () => ({ ...state, ...value }),
    [SET_LANGUAGE]: () => ({ ...state, language: value }),
}));