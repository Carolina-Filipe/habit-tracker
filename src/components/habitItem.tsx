import { count } from "console";
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
    // console.log(newProgressData);
    setProgressData((prevProgressData) => {
      return [newProgressData, ...prevProgressData];
    });
  };

  const daysChecked = useEffect(() => {
    console.log(progressData, "on useeffect");
    progressData.map((progressData) => {
      if (progressData.status === "checked") {
        console.log(daysChecked);
      }
    });
  }, []);

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
