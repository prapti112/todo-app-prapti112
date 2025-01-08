
import React from "react";
import { appStyle, inputStyle} from "./Styles/Style";
import Input from "./Components/Input.jsx";
import Button from "./Components/Button.jsx";



const App = () => {












  //function to mark task as completed
  const completeTask=(index)=>{
    const updated



  }


return (
   <div style={appStyle}>
   <h3>Todo List</h3> 
    <div>
      <Input
      type="text"
      placeholder="Add a new task"
      style={inputStyle} 
      handlenOnChange={(e) => setNewTask(e.target.value)}
      />
      <Button text="+" handlenOnClick={addTask}/>
      </div>
  <div>
      {task.map((task, index) => {

        return (
            <Task 
            Key={index}
            index={index}
            completeTask={() => ()}
            removeTask={() => ()}
            />
        );
      
      
      
       } )}
      </div>
    </div>
);

};
export default App;
  
