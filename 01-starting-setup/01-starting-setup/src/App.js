import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        quantity={expenses[0].quantity}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        quantity={expenses[1].quantity}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        quantity={expenses[2].quantity} // This process is adding attributes from the above array, and assigning them to received attribute values
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        quantity={expenses[3].quantity} // This process is adding attributes from the above array, and assigning them to received attribute values
      ></ExpenseItem>
    </div> // Html inside a javascript function, this works because of the feature called jsx, it was introduced by the react team
    //This only works due to the transformation stuff behind the scenes
  );
}

export default App;
