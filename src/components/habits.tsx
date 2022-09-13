import HabitItem from "./habitItem";

const Habits = (props: any) => {
  //to-do: figure out props type
  if (props.habits.length === 0) {
    return <h2>Found no results.</h2>;
  }
  // console.log(props.habits, "habits file");
  return (
    <div className="flex flex-col gap-8">
      {props.habits.map((habit: any) => (
        <HabitItem
          title={habit.name.charAt(0).toUpperCase() + habit.name.slice(1)}
          key={habit.name}
        />
      ))}
    </div>
  );
};

export default Habits;
