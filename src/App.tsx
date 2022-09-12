import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Habits from "./components/habits";
import NewHabitForm from "./components/newhabitform";
import { Habit } from "./types/habit";

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const addHabitsHandler = (habit: Habit) => {
    console.log(habit);
    setHabits((prevHabits) => {
      return [habit, ...prevHabits];
    });
  };

  return (
    <div className="flex flex-col w-full justify-center items-center p-8 gap-8">
      <h1>Your Habits</h1>
      <div className="w-3/4">
        <NewHabitForm className="gap-8" onAddHabit={addHabitsHandler} />
      </div>
      <div className="w-3/4">
        <Habits habits={habits} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
