import "./App.css";

function App() {
  return (
    <div className="flex p-8 gap-8">
      <h1 className="text-3xl font-bold underline">Habit Tracker</h1>
      <div className="block">
        <form>New habit form</form>
        <button>Add new habit</button>
      </div>
      <div>
        List of habits
        <div>
          Habit Object
          <div>Habit title</div>
          <div> Habit id</div>
          <div> Habit checkbox</div>
        </div>
      </div>
    </div>
  );
}

export default App;
