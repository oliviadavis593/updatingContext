import React, { Component } from "react";
import languageSpecificCopy from "./LanguageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;
  render() {
    //const copy = languageSpecificCopy["en-US"] || {};
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button onClick={() => this.context.setLang("klingon")}>
          Klingon!{" "}
          <span role="img" aria-label="klingon">
            🖖
          </span>
        </button>
      </section>
    );
  }
}

export default GreatGrandChild;

/*====== Updating Context in deeply nested components (#2) ========*/
//Now we'll add a button we intend to add this new feature to
//Remember:
// We have the handleSetLang inside App
//How can we get that function into the GGC
//Solution:
//'piggy-back' on the context
//GGC.js ===> LanguageContext.js

/*====== Updating Context in deeply nested components (#4) ========*/
//With shape of the updater function in place we can use the updater function with the button in GGC
//With changes in place we're still not able to change the language but nothing breaks = good thing!
//GGC.js ===> LangugageContext.js
