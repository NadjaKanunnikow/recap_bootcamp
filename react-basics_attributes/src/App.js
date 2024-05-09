import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">This is a heading!</h2>
      <label htmlFor="inputID">Name:</label>
      <input id="inputID" type="text"></input>
      <a className="article_link" href="https://react.dev/">
        React docs
      </a>
    </article>
  );
}
