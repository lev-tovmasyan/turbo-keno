import { createAction, createReducer } from "../../helpers/redux";

// ACTION TYPES
const SET_CONFIGS = "SET_CONFIGS";

// ACTIONS
export const setConfigs = createAction(SET_CONFIGS);

// REDUCER
const initialState = {
  language: null,
  currency: null,
  gameType: null,
  maxWin: null,
  maxBet: null,
  minBet: null,
  betStep: null,
};

export const configs = createReducer(initialState, (state, { value }) => ({
    [SET_CONFIGS]: () => ({ ...state, ...value }),
}));