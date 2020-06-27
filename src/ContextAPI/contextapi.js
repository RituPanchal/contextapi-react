import React from "react";

const ContextAPIvar = React.createContext("");

export default ContextAPIvar;

// component ContextAPIvar

// React.createContext()
// import the Component Variable created
// static contextType = Component Variable
// this.context to use it
// To pass it to children :-
{/* <ContextAPIvar.Provider value={object or state}>
    children components to whom you wanna pass the value
</ContextAPIvar.Provider> */}

//contextAPI is a react pattern that makes passing props into a deeply nested component structure easy
