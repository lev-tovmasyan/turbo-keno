export const SCENE_NAMES = {
  MENU_SCENE: 'MENU_SCENE',
  LOADING_SCENE: 'LOADING_SCENE',
  GAME_SCENE: 'GAME_SCENE'
};

export const SIDES = {
  RIGHT: "right",
  LEFT: "left"
};

export const HEADER_BTN_TYPES = {
  INFO: 'info',
  JOYSTICK: 'joystick'
};

export const mathTime = 4;

export const MATCH_GRID = {
  0: [],
  1: [null, 3],
  2: [null, 1, 10],
  3: [null, null, 2, 45],
  4: [null, null, 1, 10, 80],
  5: [null, null, 1, 3, 20, 150],
  6: [null, null, null, 2, 15, 60, 500],
  7: [1, null, null, 2, 4, 20, 80, 1000],
  8: [1, null, null, null, 5, 15, 50, 200, 2000],
  9: [2, null, null, null, 2, 10, 30, 125, 1000, 5000],
  10: [2, null, null, null, null, 5, 25, 100, 300, 2000, 10000],
};

export const KENO_TABLE = {
  0: [null, null, null, null, null, null, 1, 1, 2, 2,],
  1: [3, 1, null, null, null, null, null, null, null, null],
  2: [null, 10, 2, 1, 1, null, null, null, null, null],
  3: [null, null, 45, 10, 3, 2, 2, null, null, null],
  4: [null, null, null, 80, 20, 15, 4, 5, 2, null],
  5: [null, null, null, null, 150, 60, 20, 15, 10, 5],
  6: [null, null, null, null, null, 500, 80, 50, 30, 25],
  7: [null, null, null, null, null, null, 1000, 200, 125, 100],
  8: [null, null, null, null, null, null, null, 2000, 1000, 300],
  9: [null, null, null, null, null, null, null, null, 5000, 2000],
  10: [null, null, null, null, null, null, null, null, null, 10000]
};

export const BALL_COUNTS = {
  USER_TICKET: 10,
  DRAW_TICKET: 20,
};

export const KENO_TYPES = {
  KENO_1: 1,
  KENO_3: 3
};

const tabNamesText_1 = 'Current Game'
const tabNamesText_2 = 'Statistics'
const tabNamesText_3 = 'Draw History'
const tabNamesText_4 = 'My history'
const tabNamesText_5 = 'Leaderboard'

export const tabNames = {
  [tabNamesText_1]: 'current-game',
  [tabNamesText_2]: 'statistics',
  [tabNamesText_3]: 'draw-history',
  [tabNamesText_4]: 'my-history',
  [tabNamesText_5]: 'leaderboard'
};

export const digitsWithoutGroupBtn = {
  10: null,
  20: null,
  30: null,
  40: null,
  50: null,
  60: null,
  70: null,
  71: null,
  72: null,
  73: null,
  74: null,
  75: null,
  76: null,
  77: null,
  78: null,
  79: null,
  80: null
};

export function getTimeFromIso(iso) {
  const parsed = new Date(iso);
  const minutes = parsed.getMinutes();
  const hours = parsed.getHours();
  let time = '';

  time += ((hours < 10) ? "0" : "") + hours + ':';
  time += ((minutes < 10) ? "0" : "") + minutes;

  return time;
}
