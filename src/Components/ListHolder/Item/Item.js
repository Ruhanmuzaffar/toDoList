import { render } from "@testing-library/react";
import React, { Component } from "react";
import Aux from "../../../Hoc/Aux/Aux";
import "./Item.css";

const Item = (props) => (
  <div>
    <div className="Item">
      <input type="checkbox" style={{ backgroundColor: "black" }} />
      {/* {console.log(this.defaultChecked)} */}

      <label>{props.item}</label>

      <button style={{ color: "red" }} onClick={props.removeListItemHandler}>
        x
      </button>
    </div>
  </div>
);

export default Item;
