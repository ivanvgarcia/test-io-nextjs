import {
  LoadUserAction,
  LoginAction,
  SignupAction,
  AuthErrorAction,
  UpdateUserAction,
} from './auth';

export enum ActionTypes {
  Login = 'LOGIN',
  Signup = 'SIGNUP',
  UpdateUser = 'UPDATE_USER',
  LoadUser = 'LOAD_USER',
  AuthError = 'AUTH_ERROR',
}

export type Action =
  | LoadUserAction
  | UpdateUserAction
  | LoginAction
  | SignupAction
  | AuthErrorAction;
