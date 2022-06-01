import { Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Status from "./Status";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  return (
   <>
    <h1 style={{fontSize:"40px",color:"green"}}>AUTH CONTEXT</h1>
    <div style={{ border: "1px solid",borderRadius:25 ,margin: "50px", display: "flex" ,justifyContent:"space-around" }}>
      
      <div>
      <Button
        onClick={() => {
          if (isAuthorized === true) {
            logout();
          } else {
            login("U", "P");
          }
        }}
        colorScheme="purple"
      >
        {isAuthorized ? "Logout" : "Login"}
      </Button>
      </div>

      <div>
        <Status></Status>
      </div>
      
    </div>
    </>
  );
};

export default Navbar;
