import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <div>
      <article>
        <h1>This is an awesome heading!</h1>
        <p>You will find this kind of heading only in this article!</p>
      </article>
    </div>
  );
}
