import './Wrapper.css';
// Styling component used to give act as a div with wrapper to objects prevent stretch on large screens
function Wrapper(props) {

    const classes = "wrapper " + props.className;

    return <div className={classes}>{props.children}</div>
}

export default Wrapper;