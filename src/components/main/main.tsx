import React from "react";
import List from "./list";
import "./main.scss";

interface ListItem {
  key: string;
  inputValue: string;
  editBtn: string;
  deleteBtn: string;
  checkBtn: string;
}

interface MainState {
  listInputValue: string;
  list: ListItem[];
}

class Main extends React.Component<{}, MainState> {
  state: MainState = {
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

  handleDelete = (item: string) => {
    const updatedList = this.state.list.filter((listItem) => listItem.key !== item);
    this.setState({ list: updatedList });
  };

  handleCheck = (item: string) => {
    // const checkedList = this.state.list.map((listItem) => {
    //   if (listItem.key === item) {
    //     return { ...listItem, checked: true };
    //   }
    //   return listItem;
    // });
    // this.setState({ list: checkedList });
  };

  addListElement = () => {
    const { listInputValue } = this.state;
    if (listInputValue) {
      const listElement: ListItem = {
        key: listInputValue,
        inputValue: listInputValue,
        editBtn: "edit",
        deleteBtn: "delete",
        checkBtn: "check_circle"
      };
      const newList = [...this.state.list, listElement];
      this.setState({ list: newList, listInputValue: "" });
    }
    else {
      alert("Iltimos Inputga Qiymat kiriting!🙌");
    }
  };

  render() {
    const { listInputValue, list } = this.state;

    return (
      <div className="main">
        <h1>Welcome To Do List!</h1>
        <div className="toDoList">
          <div className="inpBtn">
            <input type="text" placeholder="Write To Do" value={listInputValue} onChange={this.handleInputChange} onKeyPress={this.handleKey}
            />
            <button onClick={this.handleClick}>Add To Do</button>
          </div>
          {list.map((item) => (
            <List
              key={item.key}
              inputValue={item.inputValue}
              editBtn={item.editBtn}
              deleteBtn={item.deleteBtn}
              checkBtn={item.checkBtn}
              onDelete={() => this.handleDelete(item.key)}
              onCheck={() => this.handleCheck(item.key)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
