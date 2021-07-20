import './Profile.css'
// Styling component used to give images a circle border 
function Profile(props) {
    return <div className="profileContainer">{props.children}</div>
}

export default Profile;