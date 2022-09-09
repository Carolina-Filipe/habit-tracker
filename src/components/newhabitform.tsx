import { useRef, useState } from "react";

const NewHabitForm = (props: any) => {
  const [habitName, setHabitName] = useState("");

  //todo: give this the correct type
  const handleHabitNameChange = (event: any) => {
    console.log(event.target.value);
    setHabitName(event.target.value);
  };

  //todo: give this the correct type
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", habitName);
    localStorage.setItem(habitName, "habits");
  };

  return (
    <form>
      New habit form
      <input
        className="border-gray-500"
        type="text"
        value={habitName}
        onChange={handleHabitNameChange}
      ></input>
      <button onClick={handleSubmit}>Add new habit</button>
    </form>
  );
};
export default NewHabitForm;
