import React, { Component } from 'react';
import Fields from '../Field/field';
import Button from '../Button/button';

class CreatorComp extends Component{
    constructor(props) {
        super();
    }
    render() {
        return (
            <React.Fragment>
                <Fields />
                <Button />
            </React.Fragment>
        )
    }
}
export default CreatorComp;