//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
let msg;
let s = {
  color: ""
};
if (time < 12) {
  msg = "Good Morning";
  s.color = "red";
} else if (time < 18) {
  msg = "Good Afternoon";
  s.color = "green";
} else {
  msg = "Good Evening";
  s.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={s}>
    {msg}
  </h1>,
  document.getElementById("root")
);
