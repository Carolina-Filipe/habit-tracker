import { useEffect, useState } from "react";
import { Progress } from "../types/progress";
import Card from "../UI/card";

const HabitItem = (props: any) => {
  const [isChecked, setIsChecked] = useState(false);
  let goal: number = 365;

  const progressPercentageCalculator: number = Math.round(
    (props.progress / goal) * 100
  );

  const checkboxHandler = () => {
    let todaysDate = new Date().toISOString().split("T")[0];
    const lastProgress =
      props.habit.habit_progress[props.habit.habit_progress?.length - 1];
    const checkedDate = lastProgress?.date.toISOString().split("T")[0];
    if (todaysDate === checkedDate) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <Card progress={props.progress}>
      <h2 className="text-base font-semibold">{props.title}</h2>
      <label>
        Today
        <input
          type="checkbox"
          checked={isChecked}
          onLoad={checkboxHandler}
          className="w-6 h-6 rounded-full checked:bg-slate-900"
          onClick={props.onUpdateProgress}
        ></input>
      </label>
      <div className="text-base font-semibold">{`${progressPercentageCalculator}%`}</div>
      <button onClick={props.onDelete}>Delete</button>
    </Card>
  );
};

export default HabitItem;
