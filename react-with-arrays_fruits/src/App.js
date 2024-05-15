import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "banana", color: "yellow" },
    { id: 2, name: "strawberry", color: "red" },
    { id: 3, name: "watermelon", color: "green" },
    { id: 4, name: "kiwi", color: "green" },
    { id: 5, name: "apple", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
