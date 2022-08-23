import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // Reusable wrapper component
  return <div className={classes}>{props.children}</div>; // Allows you to create wrapper components, the props.children is very important
}

export default Card;
