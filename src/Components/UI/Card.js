import './Card.css';
// Styling component used to act as a div with round edges
function Card(props) {

    const classes = "card " + props.className;

    return <div className={classes}>{props.children}</div>
}

export default Card;