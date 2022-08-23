//A component in javascript react is a javascript function
import "./ExpenseItem.css";
//We now pass in properties as the arguments in the function
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear(); // So this way is how you can add javascript syntax within react components and functions, you can
  //run it inline but its best practice to extract the logic and place it on a seperate line
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      {/* You use className to attach the css class to the div, class is a reserved word */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* The above must match the specified name in the app.js assignment, its done via a key/value pair, this is how 
        you share data between components within react applications, props is a very important concept.  */}
        {/* You use curly braces to import javascript inside html code, they are called dynamic placeholders */}
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <div className="expense-item__description">
        <h2>Quantity: {props.quantity}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
