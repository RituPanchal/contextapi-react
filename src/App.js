import React, { Component } from 'react';
import CreatorComp from './Creator/creatorComp';
import ContextAPIvar from './ContextAPI/contextapi';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedLang: " "
    };
  }
  onClickHandler = (lang) => {
    this.setState({ selectedLang: lang });
  }
  render() {
    return (
      <React.Fragment>
        <button type="button" class="btn btn-outline-primary" onClick={() => this.onClickHandler("english")}>English</button>
        <button type="button" class="btn btn-outline-primary" onClick={() => this.onClickHandler("hindi")}>Hindi</button>
        <ContextAPIvar.Provider value={this.state.selectedLang} >
          <CreatorComp />
        </ContextAPIvar.Provider>
      </React.Fragment>
    )
  }
}

export default App;

//<ContextAPIvar.Provider> to provide data to the child that is <CreatorComp /> in this case
{/* 
  <ContextAPIvar.Provider> has an attribute value, you can give state value here like this 
  <ContextAPIvar.Provider value={this.state.selectedLang} >
*/}
