//Components are still functions
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear(); // So this way is how you can add javascript syntax within react components and functions, you can
  //run it inline but its best practice to extract the logic and place it on a seperate line

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;

// Its best practice to keep your components small and focused, rather then big, try adding a feature at first, then extracting
// that into its own file, to see if it still works. This can be helped through rigorous planning
