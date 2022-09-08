const NewHabitForm = () => {
  const submitHandler = console.log;
  return (
    <form onSubmit={submitHandler}>
      New habit form
      <input className="border-gray-500" type="text"></input>
      <button>Add new habit</button>
    </form>
  );
};
export default NewHabitForm;
