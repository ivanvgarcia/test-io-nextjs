import { Dispatch } from 'redux';
import { ActionTypes } from '@redux/actions/types';
import { Auth, User } from '../../types';
import { setBearerToken } from '@utils/index';
import api from '@config/api';

export interface LoadUserAction {
  type: ActionTypes.LoadUser;
  payload: Auth;
}

export interface UpdateUserAction {
  type: ActionTypes.UpdateUser;
  payload: User;
}

export interface LoginAction {
  type: ActionTypes.Login;
  payload: Auth;
}

export interface SignupAction {
  type: ActionTypes.Signup;
  payload: Auth;
}

export interface AuthErrorAction {
  type: ActionTypes.AuthError;
  payload: Error;
}

export const login = (data: object) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response = await api.post('/auth/login', data);

    setBearerToken(response.data.token);

    const auth: Auth = {
      token: response.data.token,
      isAuthenticated: true,
      user: response.data.data.user,
      redirectUri: response.data.url,
      loading: false,
    };

    dispatch<LoginAction>({
      type: ActionTypes.Login,
      payload: auth,
    });
  } catch (error) {
    dispatch<AuthErrorAction>({
      type: ActionTypes.AuthError,
      payload: error.response.data,
    });
  }
};

export const loadUser = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response = await api.post('/auth/check');

    const auth: Auth = {
      token: null,
      isAuthenticated: true,
      user: response.data.user,
      redirectUri: null,
      loading: false,
    };

    dispatch<LoadUserAction>({
      type: ActionTypes.LoadUser,
      payload: auth,
    });
  } catch (error) {
    dispatch<AuthErrorAction>({
      type: ActionTypes.AuthError,
      payload: error.response.data,
    });
  }
};
