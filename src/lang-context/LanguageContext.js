import React from "react";

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  setLang: () => {}
});

export default LanguageContext;

/*====== Updating Context in deeply nested components (#3) ========*/
//We'll add an empty updater function in LC
// We can't use this.setState here because its not a component
//The important thing here is that we have shape
//LanguageContext.js ===> App.js

/*====== Updating Context in deeply nested components (#5) ========*/
//Note:
//If we don't have the updater function in place it will throw an error
//We need the updater function in place - even when its not doing anything
// It prevents any potential explosions inside our app
//LanguageContext.js  ===> App.js
