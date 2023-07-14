import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserStore(props) {

    const [job, SetJob ] = useState("FE-developer");

    const user = {
        name : "hoho",
        job,
        changeJob: (updatedJob) => SetJob(updatedJob),
    };
    
    return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
        
    
}