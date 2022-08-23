import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      quantity: 5,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      quantity: 6,
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      quantity: 8,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      quantity: 1,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      {/* Extract the following components into its own component */}
    </div> // Html inside a javascript function, this works because of the feature called jsx, it was introduced by the react team
    //This only works due to the transformation stuff behind the scenes
  );
}

export default App;
