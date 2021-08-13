export interface SignInData {
  password: string;
  email: string;
  rememberMe: boolean;
}

export interface SignInResponse {
  token: string;
}
