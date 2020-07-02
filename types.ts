export interface ReduxStore {
  auth: Auth;
}

export interface FormTypes {
  confirmDirty: boolean;
  autoCompleteResult: [];
}

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string;
}

export interface Auth {
  token?: string | null;
  isAuthenticated: boolean;
  user: User;
  redirectUri: string | null | undefined;
  loading: boolean;
  members?: [];
}

export interface SideDrawerProps {
  showDrawer: boolean;
  handleShowDrawer: () => void;
}
