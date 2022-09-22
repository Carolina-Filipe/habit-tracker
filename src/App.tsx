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

  //loads existing habits on start
  const storedHabits = JSON.parse(localStorage.getItem("Habits") || "[]");
  useEffect(() => {
    setHabits(storedHabits);
  }, []);

  //pushes progress data to the local storage habits array
  // useEffect(() => {
  //   if (progressData) {
  //     storedHabits.push(progressData);
  //     localStorage.setItem("Habits", JSON.stringify(habits));
  //   }
  // }, [progressData]);

  //console.log("stored habits + name");

  //sets changes to existing habits array
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

  const addProgressHandler = (progressData: Progress, habitName: String) => {
    setProgressData((prevProgressData) => {
      return [progressData, ...(prevProgressData ?? [])];
    });
    //console.log(progressData, "app");
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
          progress={progressData}
          onDeleteHabit={deleteHabitHandler}
          onAddProgress={addProgressHandler}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
