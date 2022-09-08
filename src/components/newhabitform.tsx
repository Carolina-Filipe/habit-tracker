import { useRef, useState } from "react";

const NewHabitForm = (props: any) => {
  const [habitName, setHabitName] = useState("");
  //   const submitHandler = (event: any) => {
  //     event.preventDefault();
  //     const habitInput = event.current.value;

  //     if (habitInput.trim().length > 0) {
  //       props.onEnterTask(habitInput);
  //     }

  //     console.log;
  //   };

  //todo: give this the correct type
  const handleHabitNameChange = (event: any) => {
    console.log(event.target.value);
    setHabitName(event.target.value);
  };

  //todo: give this the correct type
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", habitName);
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
