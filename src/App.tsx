import { useState } from "react";
import "./App.css";
import Habits from "./components/habits";
import NewHabitForm from "./components/newhabitform";
import { Habit } from "./types/habit";

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const addHabitsHandler = (habit: Habit) => {
    setHabits((prevHabits) => {
      return [habit, ...prevHabits];
    });
  };

  return (
    <div className="flex flex-col items-center p-8 gap-8">
      <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
      <div className="block">
        <NewHabitForm />
      </div>
      <div className="w-3/4">
        List of habits
        <Habits habits={habits} onAddNewHabit={addHabitsHandler} />
      </div>
    </div>
  );
}

export default App;
