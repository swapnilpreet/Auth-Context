import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import React from "react";


const Status = () => {
  const { isAuthorized } = useContext(AuthContext);
  return <div>Status: {isAuthorized ? "Logged-IN" : "Logged-Out"}</div>;
};

export default Status;
