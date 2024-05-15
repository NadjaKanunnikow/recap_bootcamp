import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "banana", color: "yellow" },
    { id: 2, name: "strawberry", color: "red" },
    { id: 3, name: "mango", color: "yellow" },
    { id: 4, name: "watermelon", color: "red" },
    { id: 5, name: "kiwi", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
