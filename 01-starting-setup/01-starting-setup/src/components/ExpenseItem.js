import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
//A component in javascript react is a javascript function
import "./ExpenseItem.css";
//We now pass in properties as the arguments in the function
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {/* You use className to attach the css class to the div, class is a reserved word */}
      <ExpenseDate date={props.date} />
      {/* funneling multiple components that are nested inside eachother, were passing data from app into expense item, then outputting some of the data
      and then forwarding the date stuff even further into the expensedate component, thats the beauty of react */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* The above must match the specified name in the app.js assignment, its done via a key/value pair, this is how 
        you share data between components within react applications, props is a very important concept.  */}
        {/* You use curly braces to import javascript inside html code, they are called dynamic placeholders */}
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
