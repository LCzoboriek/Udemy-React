import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div> // Html inside a javascript function, this works because of the feature called jsx, it was introduced by the react team
    //This only works due to the transformation stuff behind the scenes
  );
}

export default App;
