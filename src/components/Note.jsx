import React from "react";
import { FaTrash } from 'react-icons/fa';

function Note(props) {
    return (
      <div id={props.id} className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={() => props.deleteNote(props.id)}><FaTrash /></button>
      </div>
    );
  }

export default Note;