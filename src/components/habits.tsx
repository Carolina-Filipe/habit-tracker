import { useEffect, useState } from "react";
import { Habit } from "../types/habit";
import { Progress, ProgressData } from "../types/progress";
import HabitItem from "./habitItem";

const Habits = (props: any) => {
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
    let todaysDate = new Date().toISOString().split("T")[0];

    const lastProgress = habit.habit_progress[habit.habit_progress?.length - 1];
    const checkedDate = lastProgress?.date.toISOString().split("T")[0];

    console.log(habit.habit_progress);

    // if (habit.habit_progress?.length === 0 || lastProgress === undefined) {
    //   const newProgressData: ProgressData = {
    //     date: new Date(),
    //     status: "checked",
    //   };
    //   const updatedProgress = habit.habit_progress?.push(newProgressData);
    //   props.onAddProgress(updatedProgress, habit);
    // } else

    if (checkedDate === todaysDate) {
      const removeCheck = habit.habit_progress?.pop();
      props.onAddProgress(removeCheck, habit);
      // setProgressData(removeProgressData);
    } else {
      const newProgressData: ProgressData = {
        date: new Date(),
        status: "checked",
      };
      const updatedProgress = habit.habit_progress?.push(newProgressData);
      props.onAddProgress(updatedProgress, habit);
    }
    console.log(habit.habit_progress, "2");
    //if progress array has todays date
    // remove the item from the array
    //else add the progress to the array
  };

  console.log(props.progressPercentage);
  console.log(props.habits);
  return (
    <div className="flex flex-col gap-8">
      {props.habits?.map((habit: Habit, index: number) => (
        <HabitItem
          key={index}
          habit={habit}
          title={habit.name.charAt(0).toUpperCase() + habit.name.slice(1)}
          onDelete={() => handleDelete(index)}
          onAddProgress={() => handleProgress(habit)}
          progress={habit.habit_progress?.length}
        />
      ))}
    </div>
  );
};

export default Habits;
