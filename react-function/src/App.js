import React, { useState } from "react";
import "./App.css";

import AccountBookForm from "./components/AccountBookForm";
import AccountBookInfoList from "./components/AccountBookInfoList";

function App() {
  const [state, setState] = useState({
    currentId: 1,
    list: [
      {
        id: 0,
        type: "지출",
        price: 3800,
        usage: "점심 식비",
        date: "2019. 1. 16 오후 1:12:33",
      },
    ],
    keyword: "",
  });

  const change = (event) =>
    setState((prevent) => ({ ...prevent, keyword: prevent.target.value }));

  const add = (list) =>
    setState((predata) => ({ ...predata, id: ++state.currentId }));

  const remove = (id) => setState(state.filter((list) => list.id !== id));

  const update = ({ id, data }) =>
    setState((prelist) =>
      prelist.list.map((info) => {
        return state.list.id === info.id ? { ...info, ...data } : info;
      })
    );

  const filteredList = state.list.filter(
    (info) => info.usage.indexOf(state.list.keyword) !== -1
  );

  return (
    <React.Fragment>
      <AccountBookForm onAdd={add} />
      <p>
        <input
          placeholder="검색어를 입력하세요."
          onChange={change}
          value={state.keyword}
        />
      </p>
      <hr />
      <AccountBookInfoList
        list={filteredList}
        onRemove={remove}
        onUpdate={update}
      />
    </React.Fragment>
  );
}

export default App;
