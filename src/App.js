import { useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import Custominput from "./Component/Custominput";

import Header from "./Component/Header";
import Nwabutton from "./Component/Nwabutton";

function App() {
  const [add, setadd] = useState(false);

  const [Tasks, setTasks] = useState([]);

  const [singleTask, setsingleTask] = useState(" ");

  const [singledes, setsingledes] = useState("");

  const updatetask = (id) => {
    setTasks(Tasks.map((t) => (t.id === id ? { ...t, complete: true } : t)));
  };

  const deletetask = (id) => {
    setTasks(Tasks.filter((t) => (t.id === id ? false : true)));
  };

  const clearinput = () => {
    setsingleTask("");
    setsingledes("");
  };

  const addtocart = (event) => {
    const id = Tasks.length === 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singledes,
      complete: false,
    };

    setTasks([...Tasks, taskDetail]);
  };

  const handlecustomtask = (event) => {
    setsingleTask(event.target.value);
  };

  const handlecustomdes = (event) => {
    setsingledes(event.target.value);
  };

  const handleinput = () => {
    setadd(!add);
  };

  return (
    <div className="main">
      <div className="inputsection">
        <Header handleinput={handleinput} />
        {add === true ? (
          <>
            <Custominput
              value={singleTask}
              placeholder="Enter a task"
              name="Task"
              Badlav={handlecustomtask}
            />

            <Custominput
              value={singledes}
              placeholder="Item Description"
              name="Description"
              Badlav={handlecustomdes}
            />

            <div className="btnwrapper">
              <Nwabutton
                color="White"
                bg="#1877F2"
                name="Save Task"
                click={addtocart}
              />

              <Nwabutton
                color="White"
                bg="red"
                name="Cancel"
                click={clearinput}
              />
            </div>
          </>
        ) : null}
      </div>

      <div className="cardsection">
        {Tasks.map((t) => (
          <Card
            title={t.task}
            des={t.des}
            key={t.id}
            delete={() => deletetask(t.id)}
            update={() => updatetask(t.id)}
            complete={t.complete}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
