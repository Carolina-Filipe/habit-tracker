import { useEffect, useState } from "react";
import { Progress } from "../types/progress";
import Card from "../UI/card";

const HabitItem = (props: any) => {
  const [progressPercentage, setProgressPercentage] = useState<number>();

  let goal: number = 365;

  console.log(props.progress, "progress props");
  const progressPercentageCalculator: number = Math.round(
    (props.progress / goal) * 100
  );
  console.log(props.progress);

  // setProgressPercentage(progressPercentageCalculator);
  console.log(progressPercentageCalculator, "habit item");

  return (
    <Card progress={props.progress}>
      <h2 className="text-base font-semibold">{props.title}</h2>
      <label>
        Today
        <input
          type="checkbox"
          value={props.onAddProgress.toString()}
          className="w-6 h-6 rounded-full checked:bg-slate-900"
          onClick={props.onAddProgress}
        ></input>
      </label>
      <div className="text-base font-semibold">{`${progressPercentageCalculator}%`}</div>
      <button onClick={props.onDelete}>Delete</button>
    </Card>
  );
};

export default HabitItem;
