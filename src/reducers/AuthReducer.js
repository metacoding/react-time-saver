import { handle } from 'redux-pack';
import {types} from './../actions/types';

const initialState = {
  inProgress: false,
  authenticated: false,
  error: null,
  user: null
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.USER.SIGN_IN:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          inProgress: true,
          error: null
        }),
        finish: prevState => ({ ...prevState, inProgress: false }),
        failure: prevState => ({ ...prevState, inProgress: false, authenticated: false, error: payload, user: null }),
        success: prevState => ({ ...prevState, inProgress: false, authenticated: true, error: null, user: payload }),
      });
    case types.USER.SIGN_OUT:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          inProgress: true,
          error: null
        }),
        finish: prevState => ({ ...prevState, inProgress: false }),
        failure: prevState => ({ ...prevState, inProgress: false, error: payload }),
        success: prevState => ({ ...prevState, inProgress: false, authenticated: false, error: null, user: null }),
      });
    default:
      return state;
  }
}
