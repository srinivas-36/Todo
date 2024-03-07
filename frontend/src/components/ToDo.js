import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
export default function ToDo(props) {
  return (
    <div className="todo">
      <div className="text">{props.text}</div>
      <div className="icons">
        {/* <button type="button" class="btn btn-outline-success">
            Edit
          </button>
          <button type="button" class="btn btn-danger">
            Delete
          </button> */}
        <BiEdit className="icon" onClick={props.updateMode} />
        <AiFillDelete className="icon" onClick={props.deletMode} />
      </div>
    </div>
  );
}
