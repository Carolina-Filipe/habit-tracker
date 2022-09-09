import { useState } from "react";
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
        <div>
          <button
            className="inline-block px-6 pt-2.5 pb-2 bg-orange-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
            onClick={startEditingHandler}
          >
            <div> icon</div>
            Add New Habit
          </button>
        </div>
      )}
      {isEditing && (
        <form className="">
          <label className="form-label inline-block mb-2 text-gray-700">
            Create a new habit
          </label>
          <input
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-300 focus:outline-none
          "
            placeholder="e.g. Daily Strech"
            type="text"
            value={habitName}
            onChange={handleHabitNameChange}
          ></input>
          <div className="">
            <button
              className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={stopEditingHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default NewHabitForm;
