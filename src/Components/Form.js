import './Form.css'
// Component used to create form inputs takes a type a placeholder for text and an handle type and handle event 
function Form({ type, placeholder, handleType, handleEvent }) {


    return (

        <div className="search">
            {handleType === "onChange" ?
                <input type={type} placeholder={placeholder} onChange={handleEvent()} />
                :
                <input type={type} placeholder={placeholder} onKeyDown={handleEvent(this)} />}
        </div>
    )
}


export default Form;