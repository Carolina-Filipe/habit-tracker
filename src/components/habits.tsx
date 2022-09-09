import Card from "../UI/card";

const Habits = (props: any) => {
  //to-do: figure out props type
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <h2 className="text-base font-semibold">Walk</h2>
        <div> Habit checkbox</div>
      </Card>
      <Card>
        <h2 className="text-base font-semibold">Exercice</h2>
        <div> Habit checkbox</div>
      </Card>
    </div>
  );
};

export default Habits;
