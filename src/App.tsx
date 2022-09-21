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
  const [progressData, setProgressData] = useState<Progress[]>();

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("Habits") || "[]");

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

  const deleteHabitHandler = (index: number, props: any) => {
    const deletedHabits = habits?.splice(index, 1);
    if (habits) {
      setHabits([...habits]);
    }
  };

  const addProgressHandler = (progressData: Progress) => {
    setProgressData((prevProgressData) => {
      return [progressData, ...(prevProgressData ?? [])];
    });
    console.log(progressData, "app");
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
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
