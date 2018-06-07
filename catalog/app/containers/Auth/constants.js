import { createActions } from 'utils/reduxTools';

export const REDUX_KEY = 'app/Auth';

export const states = [
  'SIGNED_OUT',
  'SIGNING_IN',
  'SIGNED_IN',
  'REFRESHING',
];

export const waitingStates = [
  'SIGNING_IN',
  'REFRESHING',
];

export const actions = createActions(REDUX_KEY,
  'SIGN_UP',
  'RESET_PASSWORD',
  'CHANGE_PASSWORD',
  'SIGN_IN',
  'SIGN_IN_RESULT',
  'SIGN_OUT',
  'SIGN_OUT_RESULT',
  'CHECK',
  'REFRESH',
  'REFRESH_RESULT',
  'AUTH_LOST',
  'GET_CODE',
); // eslint-disable-line function-paren-newline

// DEBUG - 10 second expiry
// export const LATENCY_SECONDS = 35990;
export const LATENCY_SECONDS = 20;

// export const ERROR_NOTIFICATION_TTL = 20000;
// export const ERROR_REDIRECT_PATH = '/';

// TODO: move to the app config and inject
export const SIGN_OUT_REDIRECT = '/';
export const SIGN_IN_REDIRECT = '/profile';
