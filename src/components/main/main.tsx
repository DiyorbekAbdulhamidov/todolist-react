import React from "react";
import List from "./list.tsx";
import "./main.scss";

export default class Main extends React.Component {
  state = {
    listInputValue: "",
    list: [] // list elementlari ro'yxati
  };

  handleClick = () => {
    const { listInputValue } = this.state;
    this.setState({ listInputValue: "" });
    // List komponentini qo'shish
    const listElement = <List key={listInputValue} inputValue={listInputValue} />;
    // List elementini aylantirish
    const newList = [...this.state.list, listElement]; // <- Ro'yxatga qo'shish uchun rest operatorini ishlatish
    this.setState({ list: newList });
  };

  handleInputChange = (e: any) => {
    this.setState({ listInputValue: e.target.value });
  };

  render() {
    const { listInputValue, list } = this.state;

    return (
      <div className="main">
        <h1>Welcome To Do List!</h1>
        <div className="toDoList">
          <div className="inpBtn">
            <input
              type="text"
              placeholder="Write To Do"
              value={listInputValue}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleClick}>Add To Do</button>
          </div>
          {list}
        </div>
      </div>
    );
  }
}
