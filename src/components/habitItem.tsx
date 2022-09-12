import { useState } from "react";
import { Progress } from "../types/progress";
import Card from "../UI/card";
const HabitItem = (props: any) => {
  const [progressData, setProgressData] = useState<Progress[]>([]);

  const checkHandler = (event: any) => {
    const newProgressData = {
      date: new Date(),
      status: "checked",
    };
    setProgressData((prevProgressData) => {
      return [newProgressData, ...prevProgressData];
    });
    console.log(setProgressData);
  };

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
    </Card>
  );
};

export default HabitItem;
