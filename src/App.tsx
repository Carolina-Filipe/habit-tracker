import "./App.css";
import Habits from "./components/habits";

function App() {
  return (
    <div className="flex flex-col items-center p-8 gap-8">
      <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
      <div className="block">
        <form>
          New habit form
          <input className="border-gray-500" type="text"></input>
          <button>Add new habit</button>
        </form>
      </div>
      <div className="w-3/4">
        List of habits
        <Habits />
      </div>
    </div>
  );
}

export default App;
