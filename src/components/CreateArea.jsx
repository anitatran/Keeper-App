import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const emptyNote = { title: "", content: "" };
  const [input, setInput] = useState(emptyNote);
  function onChange(e) {
    const { name, value } = e.target;
    setInput(prev => ({...prev, [name]: value }));
  }

  const [focus, setFocus] = useState(false);
  function expandInput() {
    setFocus(true);
  }
  return (
    <div>
      <form onSubmit={(e) => {
          props.addNote(input);
          setInput(emptyNote);
          e.preventDefault();
          }} className="create-note">
        {focus && <input onChange={onChange} name="title" placeholder="Title" value={input.title} />}
        <textarea onClick={expandInput} onChange={onChange} name="content" placeholder="Take a note..." rows={focus ? 3 : 1} value={input.content} />
        <Zoom in={focus}>
          <Fab><FaPlus /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
