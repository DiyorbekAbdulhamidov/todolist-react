import React from "react";
import "./main.scss";

interface ListProps {
  inputValue: string;
  editBtn: string;
  deleteBtn: string;
  checkBtn: string;
  onDelete: () => void;
  onCheck: () => void;
}

export default class List extends React.Component<ListProps> {
  render() {
    const { inputValue, editBtn, deleteBtn, checkBtn } = this.props;

    return (
      <div className="list">
        <p>{inputValue}</p>
        <div className="icons">
          <span className="material-symbols-outlined editIcon">{editBtn}</span>
          <span onClick={this.props.onDelete} className="material-symbols-outlined deleteIcon">{deleteBtn}</span>
          <span onClick={this.props.onCheck} className="material-symbols-outlined checkIcon">{checkBtn}</span>
        </div>
      </div>
    );
  }
}
