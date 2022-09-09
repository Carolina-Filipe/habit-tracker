import { useRef, useState } from "react";
import { Habit } from "../types/habit";

const NewHabitForm = (props: any) => {
  const [habitName, setHabitName] = useState("");
  const [isEditing, setisEditing] = useState(false);

  //todo: give this the correct type
  const handleHabitNameChange = (event: any) => {
    console.log(event.target.value);
    setHabitName(event.target.value);
  };

  //todo: give this the correct type
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", habitName);
    // localStorage.setItem(habitName, "habits");
    const habitData: Habit = { name: habitName };
    props.onAddHabit(habitData);
    setisEditing(false);
    setHabitName("");
  };

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };
  // newhabitsavehandler that takes newhabitdata and feeds it to app tsx
  return (
    <div>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Habit</button>
      )}
      {isEditing && (
        <form>
          New habit form
          <input
            className="border-gray-500"
            type="text"
            value={habitName}
            onChange={handleHabitNameChange}
          ></input>
          <button onClick={handleSubmit}>Add new habit</button>
          <button onClick={stopEditingHandler}>Cancel</button>
        </form>
      )}
    </div>
  );
};
export default NewHabitForm;
