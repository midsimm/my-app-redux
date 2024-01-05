import React from "react";
import UserContext from "./UserContext";

const UserProvider = (props) => {
    return (
        <UserContext.Provider value={props.from}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;