import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const instructor_names = ["Steven", "Caryn", "Greg"];

// let instructors = instructor_names.map(function (instructor_name) {
//   return <Biline name={instructor_name} />;
// });

// let instructors = instructor_names.map(function (instructor_name) {
//   return <Header name={instructor_name} />;
// });

// console.log(instructors);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
