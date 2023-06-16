import React from "react";
import List from "./list.tsx";
import "./main.scss";

export default class Main extends React.Component {
  state = {
    listInputValue: "",
    list: []
  };

  handleClick = () => {
    this.addListElement();
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ listInputValue: e.target.value });
  };

  handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.addListElement();
    }
  };

  addListElement = () => {
    const { listInputValue } = this.state;
    if (listInputValue) {
      const listElement = <List key={listInputValue} inputValue={listInputValue} />;
      const newList = [...this.state.list, listElement];
      this.setState({ list: newList, listInputValue: "" });
    }

    else alert("Iltimos Inputga Qiymat kiriting!🙌");
  };

  render() {
    const { listInputValue, list } = this.state;

    return (
      <div className="main">
        <h1>Welcome To Do List!</h1>
        <div className="toDoList">
          <div className="inpBtn">
            <input
              type="text" placeholder="Write To Do" value={listInputValue} onChange={this.handleInputChange} onKeyPress={this.handleKey}
            />
            <button onClick={this.handleClick}>Add To Do</button>
          </div>
          {list}
        </div>
      </div>
    );
  }
}

// 