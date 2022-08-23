//A component in javascript react is a javascript function
import "./ExpenseItem.css";
//We now pass in properties as the arguments in the function
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* You use className to attach the css class to the div, class is a reserved word */}
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* The above must match the specified name in the app.js assignment, its done via a key/value pair  */}
        {/* You use curly braces to import javascript inside html code, they are called dynamic placeholders */}
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
