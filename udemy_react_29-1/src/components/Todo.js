import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);    // 초기값 false : modal 닫힌 상태

    function deleteHandler(){
        setModalIsOpen(true);   // state변경함수 이용 > true : modal 열린 상태
    }

    function cloeseModalHandler(){
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancle={cloeseModalHandler} onConfirm={cloeseModalHandler} />}
            {modalIsOpen && <Backdrop onClick={cloeseModalHandler}/>}
        </div>
    );
}

export default Todo;
