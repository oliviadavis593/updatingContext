import React, { Component } from "react";
import Child from "./lang-context/Child";
import LangControls from "./lang-context/LangControls";
import LanguageContext from "./lang-context/LanguageContext";

export default class App extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = lang => {
    this.setState({
      lang
    });
  };

  render() {
    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang
    };
    return (
      /*<LanguageContext.Provider
      value={{lang: window.navigator.language}}
      >*/
      <LanguageContext.Provider value={contextValue}>
        <div className="App">
          <LangControls onSetLang={this.handleSetLang} />
          <Child />
        </div>
      </LanguageContext.Provider>
    );
  }
}

/*====== Updating Context (#1) ========*/
//If we put the provider in the LangControls component = changes won't be available (not a subtree)
//We need to put the provider in App
//How to do this:
//Import LanguageContext into App component
//Wrap the subtree that needs the updated context values in the LanguageContext.Provider
//Error:
//This makes our webpage throw an error (TypeError: Cannot ready property 'lang' of undefined)
//By adding context provider - we've changed the value that was set inside createContext(value)
//Solution:
//Add the data back in by providing a prop called value to the provider with the same object we expect
//In RDT Context.Provider is present with 2 props = value & children

/*====== Updating Context (#2) ========*/
//In CDT the Provider doesn't translate to an actual HTML element
//We'll move the component to state so we can update it
//With the value store in some state - we can use a callback props (passed into LangControls) to be triggered when a user clicks a button
//Then pass the callback prop to LangControls as a prop called onSetLang
//App.js ===> LangControls.js

/*============================================ */

/*====== Updating Context in deeply nested components (#6) ========*/
//App component will be the 2nd unit:
//Using the provider to provide a context to a subtree can implement setLang button using state
// We can use the handleSetLang function to implement setLanf on the context for the subtree
