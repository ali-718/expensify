import React, { useState, useEffect } from "react";

// 1) you can use state many times you want
// 2) useState will replace the value completely

const HooksExample = () => {
  const [state, setState] = useState({
    count: 10,
    text: ""
  });

  const getData = JSON.parse(localStorage.getItem("notes"));

  const [notes, setNotes] = useState(getData || []);

  useEffect(() => {
    console.log("this should run once");
  }, []);

  useEffect(() => {
    document.title = state.count;

    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("useEffect ran");

    return () => {
      console.log("cleaning up effect");
    };
  }, [state, notes]);

  const removeData = index => {
    setNotes(notes.filter((value, i) => i !== index));
  };

  return (
    <div>
      {notes.map((item, i) => (
        <p>
          {item} &nbsp; <button onClick={() => removeData(i)}>x</button>
        </p>
      ))}
      <p>
        my {state.text} is {state.count}
      </p>
      <button
        onClick={() => {
          setState({ ...state, count: state.count + 1 });
        }}
      >
        +1
      </button>
      <input onChange={e => setState({ ...state, text: e.target.value })} />
      <button
        onClick={() => {
          setNotes([...notes, state.text]);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default HooksExample;
