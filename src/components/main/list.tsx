import React from "react";
import "./main.scss";

interface ListProps {
  inputValue: string;
  editBtn: string;
  deleteBtn: string;
  checkBtn: string;
  completed: boolean;
  onDelete: () => void;
  onCheck: () => void;
}

export default class List extends React.Component<ListProps> {
  render() {
    const { inputValue, editBtn, deleteBtn, checkBtn, completed } = this.props;

    const textStyle = {
      textDecoration: completed ? "line-through" : "none"
    };

    return (
      <div className="list">
        <p style={textStyle}>{inputValue}</p>
        <div className="icons">
          <span className="material-symbols-outlined editIcon">{editBtn}</span>
          <span onClick={this.props.onDelete} className="material-symbols-outlined deleteIcon">{deleteBtn}</span>
          <span onClick={this.props.onCheck} className="material-symbols-outlined checkIcon">{checkBtn}</span>
        </div>
      </div>
    );
  }
}
