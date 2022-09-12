import Card from "../UI/card";
const HabitItem = (props: any) => {
  return (
    <Card>
      <h2 className="text-base font-semibold">{props.title}</h2>
      <label>
        Today
        <input type="checkbox"></input>
      </label>
    </Card>
  );
};

export default HabitItem;
