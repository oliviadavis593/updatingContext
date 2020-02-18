import React from "react";
import LanguageContext from "./LanguageContext";

//console.log(LanguageContext)
export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {/*{function renderProp() {*/}
      {value => {
        //console.log(value)
        return (
          <>
            <button
              onClick={() => props.onSetLang("en-GB")}
              disabled={value.lang === "en-GB"}
            >
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("en-US")}
              disabled={value.lang === "en-US"}
            >
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("ko")}
              disabled={value.lang === "ko"}
            >
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}

/*====== Updating Context (#3) ========*/
//Now we can update LC to trigger props.onSetLang when buttons are clicked
//LangControls.js ===> LanguageSpecificCopy.js
