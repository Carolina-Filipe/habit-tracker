import { useEffect, useState } from "react";
import { Progress } from "../types/progress";
import Card from "../UI/card";

const HabitItem = (props: any) => {
  let goal: number = 365;

  // console.log(props.progress, "progress props");
  const progressPercentageCalculator: number = Math.round(
    (props.progress / goal) * 100
  );
  // console.log(props.progress);

  // // setProgressPercentage(progressPercentageCalculator);
  // console.log(progressPercentageCalculator, "habit item");

  console.log(props.onUncheck);

  return (
    <Card progress={props.progress}>
      <h2 className="text-base font-semibold">{props.title}</h2>
      <label>
        Today
        <input
          type="checkbox"
          value={props.onAddProgress.toString()}
          className="w-6 h-6 rounded-full checked:bg-slate-900"
          //todo: rename this
          onClick={props.onAddProgress}
          // onUncheck={props.onUncheck}
        ></input>
      </label>
      <div className="text-base font-semibold">{`${progressPercentageCalculator}%`}</div>
      <button onClick={props.onDelete}>Delete</button>
    </Card>
  );
};

export default HabitItem;
