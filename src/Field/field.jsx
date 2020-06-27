import React, { Component } from 'react';
import ContextAPIvar from '../ContextAPI/contextapi';


class Fields extends Component{
    static contextType = ContextAPIvar;
    render() {
        console.log("field", this.context)
        let subLang = (this.context) === "english" ? "Type your name" : "apna naam likhiye"
        return (
            <React.Fragment>
                <input type="text" placeholder={subLang}/>
            </React.Fragment>
        )
    }
}
export default Fields;