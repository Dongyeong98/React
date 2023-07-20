import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialUser = {
  name: "hoho",
  job: "ming",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };
      break;
    default:
      break;
  }
};

export default function UserStore(props) {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log(user);
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
