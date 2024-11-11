import { Action } from "../reducer/authReducer";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<Action>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
