import { useState } from "react";
import { Habit } from "../types/habit";
import { Progress, ProgressData } from "../types/progress";

const NewHabitForm = (props: any) => {
  const [habitName, setHabitName] = useState("");
  const [isEditing, setisEditing] = useState(false);
  // const [habitProgress, setHabitProgress] = useState<Progress[]>([]);

  //todo: give this the correct type
  const handleHabitNameChange = (event: any) => {
    setHabitName(event.target.value);
  };

  //todo: give this the correct type

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const progressData: ProgressData = { date: new Date(), status: "" };
    const progress: Progress = [progressData];
    const habitData: Habit = { name: habitName, habit_progress: progress };
    props.onAddHabit(habitData);
    setisEditing(false);
    setHabitName("");
  };

  return (
    <div className="w-full flex  justify-center">
      {!isEditing && (
        <button
          className="inline-block px-6 pt-2.5 pb-2 bg-green text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
          onClick={startEditingHandler}
        >
          <div> + </div>
          Add New Habit
        </button>
      )}
      {isEditing && (
        <form className=" w-1/2">
          <label className="flex justify-center form-label inline-block mb-2 text-gray-700">
            Create a new habit
          </label>
          <input
            className="flex justify-center form-control
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
          <div className="flex justify-center g-8">
            <button onClick={handleSubmit}>Add</button>
            <button onClick={stopEditingHandler}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};
export default NewHabitForm;
