import { useEffect, useState } from "react";
import { Progress } from "../types/progress";
import Card from "../UI/card";

const HabitItem = (props: any) => {
  const [progressData, setProgressData] = useState<Progress[]>([]);

  const checkHandler = (event: any) => {
    const newProgressData = {
      date: new Date(),
      status: "checked",
    };
    console.log(newProgressData);
    setProgressData((prevProgressData) => {
      return [newProgressData, ...prevProgressData];
    });
  };

  useEffect(() => {
    let count: number = 0;
    let goal: number = 365;
    progressData.forEach((progressData) => {
      if (progressData.status === "checked") {
        count = count + 1;
      }
    });
    const achievedPercentage = Math.round((count / goal) * 100);
    // console.log("number achieve" + count, achievedPercentage + "%");
  }, [progressData]);

  return (
    <Card>
      <h2 className="text-base font-semibold">{props.title}</h2>
      <label>
        Today
        <input
          type="checkbox"
          className="w-6 h-6 rounded-full checked:bg-slate-900"
          onClick={checkHandler}
        ></input>
      </label>
      <button onClick={props.onDelete}>Delete</button>
    </Card>
  );
};

export default HabitItem;
