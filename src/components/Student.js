import React, { useState, useReducer } from "react";
import StudentInfo from "./StudentInfo";

const reducer = (state, action) => {
    switch(action.type) {
        case 'add' :
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        case 'delete':
            return {
                count: state.count -1,
                students: state.students.filter((student) => student.id !== action.payload.id),
            }
        case 'mark' :
            return {
                count : state.count,
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return {...student, isHere: !student.isHere};
                    }
                    return student;
                }),
            }
        default :
            return state;
    }
};

const initialState = {
    count: 0,
    students: [],
};

function Student() {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({type:'add', payload: {name}})
            }}>추가</button>
            {studentsInfo.students.map(student => {
                return (<StudentInfo key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} />)
            })}
        </div>
    );
}

export default Student;