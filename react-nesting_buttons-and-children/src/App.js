import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I`m the first button! </Button>
      <Button>No, I am the first!</Button>
      <Button>Liar, I was there first!</Button>
      <Button>Na Na Na! I`m sure we will find a solution😌</Button>
      <Button>I am the second!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

// without the prop children, the code would look like this, more complex, less flexible and more maintenance-intensive

// export default function App() {
//   return (
//     <main>
//       <Button buttonText="I`m the first button!" />
//       <Button buttonText="No, I am the first!" />
//       <Button buttonText="Liar, I was there first!" />
//       <Button buttonText="Na Na Na! I`m sure we will find a solution😌" />
//       <Button buttonText="I am the second!" />
//     </main>
//   );
// }

// function Button({ buttonText }) {
//   return (
//     <button className="button" type="button">
//       {buttonText}
//     </button>
//   );
// }
