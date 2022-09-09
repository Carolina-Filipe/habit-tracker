import Card from "../UI/card";
const HabitItem = (props: any) => {
  return (
    <Card>
      <h2 className="text-base font-semibold">{props.name}</h2>
      <div> Habit checkbox</div>
    </Card>
  );
};

export default HabitItem;
