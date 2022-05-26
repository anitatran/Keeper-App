import React, {useState} from "react";

function CreateArea(props) {
  const emptyNote = { title: "", content: "" };
  const [input, setInput] = useState(emptyNote);
  function onChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setInput(prev => ({...prev, [name]: value }));
  }
  return (
    <div>
      <form onSubmit={(e) => {
          props.addNote(input);
          setInput(emptyNote);
          e.preventDefault();
          }}>
        <input onChange={onChange} name="title" placeholder="Title" value={input.title} />
        <textarea onChange={onChange} name="content" placeholder="Take a note..." rows="3" value={input.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
