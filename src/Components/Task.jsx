import React from "react";
import { customButtonStyle, taskstyles } from "../Styles/Style";
import Button from "./Button";

const Task = (props) => {
    const { task, index, completeTask, removeTask } = props;

    return (
        <div
            style={{
                ...taskstyles,
                textDecoration: task.completed ?"line-through" :"none",
                opacity: task.completed ? 0.5 : 1,
            }}
        >
            {task.text}
            <div>
                <Button

                    text={task.complete ? "Undo" : "Done"}
                    ownstyle={customButtonStyle}
                    handleOnClick={() => completeTask(index)}
                />
                <Button
                    text="Remove"
                    ownstyle={customButtonStyle}
                    handleOnClick={() => removeTask(index)}
                />
            </div>
        </div>
    );
};