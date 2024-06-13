import React, { useState, useEffect } from "react";

// 현재시간을 특정 format의 문자열로 반환
const getCurrentTimetoString = () => {
  return new Date().toLocaleString();
};

// 천 단위 구분기호를 포함한 문자열을 반환(정규식 이용)
const toCommaString = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function AccountBookInfo(props) {
  // static defaultProps = {
  //   data: {
  //     id: 0,
  //     type: "분류",
  //     price: 0,
  //     usage: "-",
  //     date: "-"
  //   },
  //   onUpdate: () => console.warn("onUpdate is not defined.")
  // };

  // 수정을 할 때, 기존의 내용이 변하므로 state를 정의
  const [state, setState] = useState({
    editing: false,
    type: "",
    price: "",
    usage: "",
    date: "",
  });

  const remove = () => {
    const { data, onRemove } = props;
    onRemove(data.id);
  };

  // 수정/적용 버튼의 토글 기능
  const toggleEdit = () => {
    const { editing } = state;
    setState({
      editing: !editing,
    });
  };

  // select와 input 태그의 값이 변할 때 이벤트 처리
  const changeInput = (event) => {
    const { name, value } = event.target;
    setState({
      [name]: value,
      date: getCurrentTimetoString(),
    });
  };

  // useEffect(() => {
  //   const { data, onUpdate } = props;

  //   // 수정 버튼을 클릭한 경우(input 태그가 표시되게 해준다)
  //   if (!prevState.editing && state.editing) {
  //     setState({
  //       type: data.type,
  //       price: data.price,
  //       usage: data.usage,
  //       date: data.date,
  //     });
  //   }

  //   // 적용 버튼을 클릭한 경우(App.js에 있는 update 함수를 호출)
  //   if (prevState.editing && !state.editing) {
  //     onUpdate(data.id, {
  //       type: state.type,
  //       price: state.price,
  //       usage: state.usage,
  //       date: state.date,
  //     });
  //   }
  // }, []);

  const style = {
    border: "1px solid black",
    padding: "5px",
    margin: "5px",
  };

  const { editing } = state;

  // 일반
  const { type, price, usage, date } = props.data;

  return (
    <div style={style}>
      <div>{type}</div>
      <div>{toCommaString(price)}원</div>
      <div>{usage}</div>
      <div>{date}</div>
      <button onClick={toggleEdit}>수정</button>
      <button onClick={remove}>삭제</button>
    </div>
  );
}

// memo
// shouldComponentUpdate(nextProps, nextState) {
//   // 현재 수정 중인 상태가 아니고 다음 state 역시 수정 중이지 않고 다음 props.data와 현재 props.data가 같다면
//   // 리렌더링 방지
//   if (
//     !this.state.editing &&
//     !nextState.editing &&
//     nextProps.data === this.props.data
//   ) {
//     return false;
//   }

//   return true;
// }

// 수정
// if (editing) {
//   return (
//     <div style={style}>
//       <select
//         value={state.type}
//         name="type"
//         onChange={changeInput}
//       >
//         <option>지출</option>
//         <option>수입</option>
//       </select>
//       <input
//         placeholder="금액"
//         type="number"
//         name="price"
//         value={state.price}
//         onChange={changeInput}
//       />
//       <input
//         placeholder="사용목적"
//         name="usage"
//         value={state.usage}
//         onChange={changeInput}
//       />
//       <button onClick={toggleEdit}>적용</button>
//       <button onClick={remove}>삭제</button>
//     </div>
//   );
// }

export default AccountBookInfo;
