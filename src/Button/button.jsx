import React, { Component } from "react";
import ContextAPIvar from "../ContextAPI/contextapi";

class Button extends Component{
    static contextType = ContextAPIvar;
    
    render() {
        let subLang = (this.context) === "english" ? "Submit" : "Bhariye";
        console.log(this.context);
        return (
            <React.Fragment>
                <button type="button" class="btn btn-outline-primary">{subLang}</button>
           </React.Fragment> 
        )
    }
}

export default Button;

// static contextType //variable
// this.context //to use the variable 