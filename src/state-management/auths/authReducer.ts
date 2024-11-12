interface LoginAction {
  user: string;
  type: "login";
}

interface LogoutAction {
  type: "logout";
}
type Action = LoginAction | LogoutAction;

const AuthReducer = (state: string, action: Action) => {
  if (action.type === "login") return action.user;
  if (action.type === "logout") return "";

  return state;
};

export default AuthReducer;
