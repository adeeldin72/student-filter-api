
import Form from './Form';
import { computedAverage as gradesAverage } from './Functions';
import './Student.css'
import Profile from './UI/Profile';

function Student({ icon, name, email, company, skill, average, id, studentInfo, updateTags, index, tags }) {
    // when button is clicked run this function to show grades. 
    function isToggled() {
        const btn = document.querySelector(`#button${id}`);
        btn.textContent === "+" ? btn.textContent = "—" : btn.textContent = "+";
        document.querySelector(`#gradesList${id}`).classList.toggle('hidden')

    }
    // function used to add tags
    function addTag(e) {
        if ((e.code === "Enter" || e.key === "Enter") && (e.target.value.trim() !== "")) {

            const editedArray = studentInfo.map(value => {
                return value;
            })

            editedArray[index]['tags'].push(e.target.value)
            e.target.value = "";
            updateTags(editedArray);
        }
    }

    return (
        <div className="studentContent" tabIndex="0">
            <div className="imgContainer">
                <Profile>
                    <img src={icon} alt={`The profile pic for ${name}`} />
                </Profile>
            </div>
            <div className="studentInfo">
                <p className='studentName'>{name}</p>

                <ul>
                    <li><p>Email: {email}</p></li>
                    <li><p>Company: {company}</p></li>
                    <li><p>Skill: {skill}</p></li>
                    <li><p>Average: {gradesAverage(average)}%</p></li>

                    <ul id={`gradesList${id}`} className="listOfGrades hidden">
                        {average.map((value, index) => {
                            return <li key={`testGrade${index}`}><p>Test {index + 1}: <span className="tab"></span>  {value}%</p></li>
                        })}
                    </ul>

                </ul>

                <div>
                    <ul className="tags">
                        {tags.map((value, index) => {
                            return (
                                <li key={`tag${name}${index}`}><p>{value}</p></li>
                            )
                        })}
                    </ul>
                </div>

                <div className="tagForm" id={index}>
                    <Form
                        type="text"
                        placeholder="Add a tag"
                        handleType="onSubmit"
                        handleEvent={() => addTag}
                    >

                    </Form>
                </div>

            </div>
            <button id={`button${id}`} className="gradesButton" onClick={() => isToggled()}>+</button>
        </div >
    )

}

export default Student;