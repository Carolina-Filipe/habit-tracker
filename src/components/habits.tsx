import { useState } from "react";
import { Habit } from "../types/habit";
import HabitItem from "./habitItem";

const Habits = (props: any) => {
  //to-do: figure out props type
  const [newHabits, setNewHabits] = useState<Habit[]>();

  if (props.habits?.length === 0) {
    return <h2>Found no results.</h2>;
  }

  const handleDelete = () => {
    setNewHabits(props.habits);
    props.onDeleteHabit(newHabits);
  };

  return (
    <div className="flex flex-col gap-8">
      {props.habits?.map((habit: any, index: number) => (
        <HabitItem
          key={index}
          title={habit.name.charAt(0).toUpperCase() + habit.name.slice(1)}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Habits;
