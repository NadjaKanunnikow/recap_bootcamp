import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="hotpink" disabled={false} text="click me!" />;
}

function Button({ color, isDisabled, text }) {
  return (
    <button type="button" disabled={isDisabled} style={{ color: color }}>
      {text}
    </button>
  );
}
