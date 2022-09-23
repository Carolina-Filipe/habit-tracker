import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Habits from "./components/habits";
import NewHabitForm from "./components/newhabitform";
import { Habit } from "./types/habit";
import { Progress, ProgressData } from "./types/progress";

function App() {
  //gets new habits and adds them to array before sending to localStorage
  const [habits, setHabits] = useState<Habit[]>();
  const [progressPercentage, setProgressPercentage] = useState<number>();

  //loads existing habits on start
  const storedHabits = JSON.parse(localStorage.getItem("Habits") || "[]");
  useEffect(() => {
    setHabits(storedHabits);
  }, []);

  useEffect(() => {
    if (habits) {
      localStorage.setItem("Habits", JSON.stringify(habits));
    }
  }, [habits]);

  const addHabitsHandler = (habit: Habit) => {
    setHabits((prevHabits) => {
      return [habit, ...(prevHabits ?? [])];
    });
  };

  const deleteHabitHandler = (habit: Habit) => {
    if (habits) {
      setHabits([...habits]);
    }
  };

  const addProgressHandler = (progressData: ProgressData, habit: Habit) => {
    let goal: number = 365;
    habit.habit_progress?.push(progressData);
    if (habits) {
      setHabits([...habits]);
    }
    console.log(habit.habit_progress);
    const progressPercentageCalculator: number = Math.round(
      (habit.habit_progress?.length / goal) * 100
    );
    console.log(progressPercentageCalculator);

    setProgressPercentage(progressPercentageCalculator);
    console.log(progressPercentage);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-8 gap-8">
      <h1>Your Habits</h1>
      <div className="w-3/4">
        <NewHabitForm className="gap-8" onAddHabit={addHabitsHandler} />
      </div>
      <div className="w-3/4">
        <Habits
          habits={habits}
          onDeleteHabit={deleteHabitHandler}
          onAddProgress={addProgressHandler}
          progressPercentage={progressPercentage}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
