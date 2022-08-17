//A component in javascript react is a javascript function
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 249.67;
  return (
    <div className="expense-item">
      {/* You use className to attach the css class to the div, class is a reserved word */}
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        {/* You use curly braces to import javascript inside html code, they are called dynamic placeholders */}
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
