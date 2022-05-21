/* eslint-disable */ 
import React, { useState } from 'react';  // useState
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['범죄도시2 추천', '코딩애플 강의', '에어컨 바람 주의' ]); // [a, b] 배열로 남음, a는 데이터 그대로 b는 수정하기 위한 함수
  let [좋아요, 좋아요변경] = useState(0);
  let posts = '영화리뷰';
  
  // const changeTitle = ()=> {글제목변경(['범죄도시2 비추천', '코딩애플 강의', '에어컨 바람 주의'])};
  function changeTitle(){
    // 깊은 복사 > ...[] 제거 후 [글제목] 새로 생성
    var newArray = [...글제목]; 
    newArray[0] = "범죄도시2 비추천"
    글제목변경(newArray);
  }
  function sortTitle(){
    var newArray = [...글제목];
    글제목변경(newArray.sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
      </div>
      <button onClick={sortTitle}>정렬</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{좋아요변경(좋아요+1)}}> 👍🏻 </span> { 좋아요 } </h4>
        <p>5월 21일 발행</p>
        <button onClick={ changeTitle }>제목변경!</button>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 21일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>5월 21일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
