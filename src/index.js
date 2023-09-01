import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Test1 from "./Test1";
import HandlerEx from "./ex/HandlerEx";
import HandlerEx2 from "./ex/HandlerEx2";
import HandlerEx3 from "./ex/HandlerEx3";
import HandlerEx4 from "./ex/HandlerEx4";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <Test1></Test1>
    <HandlerEx></HandlerEx>
    <HandlerEx2></HandlerEx2>
    <HandlerEx3></HandlerEx3>
    <HandlerEx4></HandlerEx4> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
