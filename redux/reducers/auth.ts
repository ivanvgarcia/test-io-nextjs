import { Action, ActionTypes } from '@redux/actions';
import { Auth } from '../../types';

const initialState: Auth = {
  token: null,
  isAuthenticated: false,
  user: {
    id: 0,
    name: '',
    email: '',
    photo: '',
  },
  redirectUri: null,
  loading: true,
  members: [],
};

export const auth = (state: Auth = initialState, action: Action): Auth => {
  switch (action.type) {
    case ActionTypes.Login:
      return { ...state, ...action.payload };
    case ActionTypes.Signup:
      return action.payload;
    case ActionTypes.LoadUser:
      return { ...state, ...action.payload };
    case ActionTypes.UpdateUser:
      return { ...state, user: { ...action.payload, ...state } };
    case ActionTypes.AuthError:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: {
          id: 0,
          name: '',
          email: '',
          photo: '',
        },
        loading: false,
      };
    default:
      return state;
  }
};
