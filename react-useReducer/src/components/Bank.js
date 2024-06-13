import React, { useState, useReducer } from "react";

// reducer : state update
// dispatch : state update 요구
// action : 요구 내용

const ACTION_TYPE = {
  deposit: 'deposit',
  withdraw: 'withdraw',
}

// money state는 reducer를 통해서만 수정이 가능
// dispatch로 reducer를 호출, reducer에 action 전달 > state update 
const reducer = (state, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case ACTION_TYPE.deposit :
      return state + action.payload;
    case ACTION_TYPE.withdraw :
      return state - action.payload;
    default:
      return state;
  }
};

function Bank(){
    const [ number, setNumber ] = useState(0);

  // useReducer [state, dispatch] = useReducer(reducer, state 초기값)
  const [money, dispatch] = useReducer(reducer, 0);
  
  return (
    <div>
      <h2>useReducer</h2>
      <p>잔고: {money} 원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
        />
      <button onClick={() => {
        dispatch({type: ACTION_TYPE.deposit, payload: number});
      }}>예금</button>
      <button onClick={() => {
        dispatch({type: ACTION_TYPE.withdraw, payload: number});
      }}>출금</button>
    </div>
  );
}

export default Bank;