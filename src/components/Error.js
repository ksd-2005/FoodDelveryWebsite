import React from "react";
import { useRouteError } from "react-router";
const Error=()=>{
    const errorReceived=useRouteError();
    console.log(errorReceived);
    return(
        <h1>Oops Something went wrong</h1>
    );
}
export default Error;