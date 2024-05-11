import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    return console.log(
      "You´ve clicked me with the handleClick function inside the App component!"
    );
  }
  return (
    <>
      <Button
        color="hotpink"
        backgroundColor="black"
        disabled={false}
        text="click me!"
        onClick={handleClick}
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

function Button({ onClick, color, isDisabled, backgroundColor, text }) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={isDisabled}
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
}
