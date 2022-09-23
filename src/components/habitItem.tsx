import { useEffect, useState } from "react";
import { Progress } from "../types/progress";
import Card from "../UI/card";

const HabitItem = (props: any) => {
  return (
    <Card>
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
      <div className="text-base font-semibold">{props.progressPercentage}</div>
      <button onClick={props.onDelete}>Delete</button>
    </Card>
  );
};

export default HabitItem;
