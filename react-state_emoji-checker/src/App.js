import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [emoji, setEmoji] = useState("");

  function handleClick(event) {
    setEmoji(emoji + event.target.textContent);
  }
  const validCode = "🐡🐠🐋";

  return (
    <>
      <div className="container">
        <div className="button-container">
          <button type="button" onClick={handleClick}>
            <span role="img" aria-label="Pufferfish">
              🐡
            </span>
          </button>
          <button type="button" onClick={handleClick}>
            <span role="img" aria-label="Whale">
              🐋
            </span>
          </button>
          <button type="button" onClick={handleClick}>
            <span role="img" aria-label="Clownfish">
              🐠
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setEmoji("");
          }}
        >
          Reset
        </button>
        <p>Entered code: {emoji}</p>
        {emoji === validCode && <p>Valid code!</p>}
        <ButtonList />
      </div>
    </>
  );
}

// Bonus challenge >>>>ButtonList<<<<

function ButtonList() {
  const [text, setText] = useState("");
  function handleClick(event) {
    setText(
      text ? text + " " + event.target.textContent : event.target.textContent
    );
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        The current limit
      </button>
      <button type="button" onClick={handleClick}>
        is
      </button>
      <button type="button" onClick={handleClick}>
        not
      </button>
      <button type="button" onClick={handleClick}>
        the limit
      </button>
      <button type="button" onClick={handleClick}>
        forever
      </button>
      <button
        type="button"
        onClick={() => {
          setText("");
        }}
      >
        Reset
      </button>
      <p>Entered text: {text}</p>
    </>
  );
}
