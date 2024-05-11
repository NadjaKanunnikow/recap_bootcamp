import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button
        color="hotpink"
        backgroundColor="black"
        disabled={false}
        text="click me!"
        // onClick={handleClick}
      />
      <Button
        color="white"
        backgroundColor="hotpink"
        disabled={false}
        text="don`t click me!"
      />
      <Button
        color="black"
        backgroundColor="pink"
        disabled={false}
        text="ME! ME! Click MEEEEEE!"
      />
    </>
  );
}

function Button({ color, isDisabled, backgroundColor, text }) {
  function handleClick() {
    return console.log("Adding a click event!");
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      disabled={isDisabled}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
}
