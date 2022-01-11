import React, { useEffect, useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleClick = (value) => {
    setTask(value);
  };
  const buttonClick = () => {
    setList([...list, task]);
  };

  console.log(list);
  return (
    <div className="App">
      <div>
        <input onChange={(e) => handleClick(e.target.value)} />
        <button type="button" onClick={() => buttonClick()}>
          add
        </button>
      </div>
      <div>
        {list.map((d) => (
          <>
            {d}
            <button type="button">edit</button>
            <button type="button">delete</button>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
