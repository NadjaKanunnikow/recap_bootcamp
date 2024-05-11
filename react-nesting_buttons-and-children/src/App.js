import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I`m the first button! </Button>
      <Button>No, I am the first!</Button>
      <Button>Liar, I was there first!</Button>
      <Button>Na Na Na! I`m sure we will find a solution😌</Button>
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
//       <Button first="I`m the first button!" />
//       <Button second="No, I am the first!" />
//       <Button third="Liar, I was there first!" />
//       <Button fourth="Na Na Na! I`m sure we will find a solution😌" />
//     </main>
//   );
// }

// function Button({ first, second, third, fourth }) {
//   return (
//     <button className="button" type="button">
//       {first}
//       {second}
//       {third}
//       {fourth}
//     </button>
//   );
// }
