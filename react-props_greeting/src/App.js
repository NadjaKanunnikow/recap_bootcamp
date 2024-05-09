import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Mareike" />
      <ShowText isVisible text="I am conditionaly rendered! ;-)" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Mareike" ? "Coach" : name}!</h1>;
}
// Conditional rendering

function ShowText({ text, isVisible }) {
  return (
    <div>
      <p>{isVisible ? text : null}</p>
    </div>
  );
}
