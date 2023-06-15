import React from "react";
import "./main.scss";

interface ListProps {
  inputValue: string;
}

export default class List extends React.Component<ListProps> {
  render() {
    const { inputValue } = this.props;

    return (
      <div className="list">
        <p>{inputValue}</p>
        <div className="icons">
          <span className="material-symbols-outlined editIcon">edit</span>
          <span className="material-symbols-outlined deleteIcon">delete</span>
          <span className="material-symbols-outlined checkIcon">check_circle</span>
        </div>
      </div>
    );
  }
}
