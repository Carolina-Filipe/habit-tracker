import "./App.css";
import Habits from "./components/habits";
import NewHabitForm from "./components/newhabitform";

function App() {
  return (
    <div className="flex flex-col items-center p-8 gap-8">
      <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
      <div className="block">
        <NewHabitForm />
      </div>
      <div className="w-3/4">
        List of habits
        <Habits />
      </div>
    </div>
  );
}

export default App;
