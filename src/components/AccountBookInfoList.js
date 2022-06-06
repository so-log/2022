import React, { memo } from "react";
import AccountBookInfo from "./AccountBookInfo";

function AccountBookInfoList(props) {
  const defaultProps = {
    list: [],
    onRemove: () => console.warn("onRemove is not defined."),
    onUpdate: () => console.warn("onUpdate is not defined."),
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.list !== this.props.list;
  // }

  const { list, onRemove, onUpdate } = props;
  const infoList = list.map((info) => (
    <AccountBookInfo
      key={info.key}
      data={info}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
  ));

  return <React.Fragment>{infoList}</React.Fragment>;
}
const Memorized = memo(AccountBookInfoList);
export default AccountBookInfoList;
