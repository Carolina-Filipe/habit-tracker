import HabitItem from "./habitItem";

const Habits = (props: any) => {
  //to-do: figure out props type
  if (props.habits?.length === 0) {
    return <h2>Found no results.</h2>;
  }

  const deleteHabitHandler = (index: number) => {
    console.log(index);
    console.log(props.habits);

    const newHabits = props.habits.slice(index, index);
    console.log(newHabits);
    //reset state
  };

  return (
    <div className="flex flex-col gap-8">
      {props.habits?.map((habit: any, index: number) => (
        <HabitItem
          key={index}
          title={habit.name.charAt(0).toUpperCase() + habit.name.slice(1)}
          onDelete={() => deleteHabitHandler(index)}
        />
      ))}
    </div>
  );
};

export default Habits;
