import { useEffect, useState } from "react";
import { Habit } from "../types/habit";
import { Progress, ProgressData } from "../types/progress";
import HabitItem from "./habitItem";

const Habits = (props: any) => {
  const [progressData, setProgressData] = useState<ProgressData>();
  //to-do: figure out props type

  if (props.habits?.length === 0) {
    return <h2>Found no results.</h2>;
  }

  const handleDelete = (index: number) => {
    const deletedHabit = props.habits?.splice(index, 1);
    props.onDeleteHabit(deletedHabit);
    console.log("this is the deleted habit ", deletedHabit);
  };

  const handleProgress = (habit: Habit) => {
    const newProgressData: ProgressData = {
      date: new Date(),
      status: "checked",
    };
    props.onAddProgress(newProgressData, habit);
    setProgressData(newProgressData);
  };

  return (
    <div className="flex flex-col gap-8">
      {props.habits?.map((habit: Habit, index: number) => (
        <HabitItem
          key={index}
          title={habit.name.charAt(0).toUpperCase() + habit.name.slice(1)}
          onDelete={() => handleDelete(index)}
          onAddProgress={() => handleProgress(habit)}
        />
      ))}
    </div>
  );
};

export default Habits;
