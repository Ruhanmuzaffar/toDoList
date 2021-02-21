import React, { Component } from "react";

import "./InputField.css";
import Item from "../ListHolder/Item/Item";

import axios from "axios";
class InputField extends Component {
  itemHolderTemp = "";
  state = {
    listItems: [],
  };

  //button test
  buttonStyle = {
    backgroundColor: "lightBlue",
  };

  typingHangler = (event) => {
    // it will save the typed string in to variable itemHolderTemp
    this.itemHolderTemp = event.target.value;
  };
  addItemToList = () => {
    //this will set the listItems in state to itemHolderTemp
    let copyOfStateItems = this.state.listItems.slice();
    let copyOfItemHolderTemp = this.itemHolderTemp;

    copyOfStateItems.push(copyOfItemHolderTemp);

    this.setState({
      listItems: copyOfStateItems,
    });
  };

  // this method is used for onFocus mehod of the input files
  changeIt = (x) => {
    x.backgroundColor = "white";
    x.value = "karim";
    x.defaultValue = "satar";

    document.getElementById("fname").style.backgroundColor = "red";
    document.getElementById("fname").value = "";
    document.getElementById("fname").defaultValue = "";
  };

  // this method intends to remove the item from the list
  removeListItemHandler = (index) => {
    // without mutating the state
    const copyOfListItems = this.state.listItems.slice();

    copyOfListItems.splice(index, 1);
    this.setState({
      listItems: copyOfListItems,
    });

    //with mutating the state directly

    // this.state.listItems.splice(index, 1);
    // this.setState({
    //   listItems: this.state.listItems,
    // });
    // {
    //   console.log(this.state.listItems);
    // }
  };

  dashingItem = () => {};
  render() {
    let items = null;
    items = this.state.listItems.map((idKey, index) => {
      return (
        <Item
          item={idKey}
          id={idKey + index}
          key={idKey + index}
          removeListItemHandler={this.removeListItemHandler.bind(this, index)}
          dashingItem={this.dashingItem}
          show={false}
        />
      );
    });
    return (
      <div className="InputField">
        <input
          style={{ backgroundColor: "white" }}
          id="fname"
          onChange={this.typingHangler}
          rows="4"
          cols="80"
          className="input"
          defaultValue=""
          onFocus={this.changeIt.bind(this)}
        />

        <button style={this.buttonStyle} onClick={this.addItemToList}>
          ADD
        </button>

        {items}
      </div>
      // hi this is fu
    );
  }
}
export default InputField;
