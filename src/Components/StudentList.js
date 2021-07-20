//the component created
import { useEffect, useState } from "react";
import Form from "./Form";
import Student from "./Student";
import './StudentList.css'
import Card from "./UI/Card";

function StudentList(props) {
    const [studentInfo, setStudentInfo] = useState([]);
    const [searchedName, setSearchedName] = useState('');
    const [searchedTag, setSearchedTag] = useState('');
    let ran = false;

    // function call
    useEffect(() => {
        props.fetchCall().then(result => setStudentInfo(result.students));
    }, [])

    // used to get current text inside name input
    function inputNameChange(e) {
        setSearchedName(e.target.value);
    }
    // used to get current text inside tag input
    function inputTagChange(e) {
        setSearchedTag(e.target.value);
    }

    return (
        <Card className="card">
            <Form
                type="text"
                placeholder="Search by name"
                handleType="onChange"
                handleEvent={() => inputNameChange}
            />
            <Form
                type="text"
                handleType="onChange"
                placeholder="Search by tag"
                handleEvent={() => inputTagChange}
            />
            <div className="listContainer">
                {studentInfo.filter(value => {
                    // if no tag element exits create one
                    if (typeof value['tags'] === 'undefined') {
                        value['tags'] = [];
                    }

                    // filter through the current text inside searchedName and also remove any outside whitespace for searchedName
                    const name = `${value.firstName} ${value.lastName}`;
                    if (searchedName.trim() === '') {
                        return value;
                    } else if (name.toUpperCase().includes(searchedName.trim().toUpperCase())) {
                        return value;
                    }
                    // Continue now doing the same thing with the tags
                }).filter(value => {
                    const tag = `${[...value.tags]}`;
                    if (searchedTag.trim() === '') {
                        return value;
                    } else if (tag.toUpperCase().includes(searchedTag.trim().toUpperCase())) {
                        return value;
                    }
                }).map((value, index) => {

                    // if map had values then this would become true which will be used down below
                    ran = true;

                    return (
                        <Student
                            key={value.id}
                            icon={value.pic}
                            name={`${value.firstName} ${value.lastName}`}
                            email={value.email}
                            company={value.company}
                            skill={value.skill}
                            average={value.grades}
                            id={value.id}
                            index={index}
                            studentInfo={studentInfo}
                            updateTags={setStudentInfo}
                            tags={value.tags}
                        />

                    )

                })
                }
                {/* If map ran then this is not displayed else if map did not run then this is displayed  */}
                {!ran ? <div className='notFound'>
                    <p>no results found!</p>
                </div> : ''}
            </div>
        </Card>
    )
}

//default export
export default StudentList;