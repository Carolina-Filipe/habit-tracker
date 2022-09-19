const Card = (props: any) => {
  const percentage = 0.1;

  const cardWdith = 0;
  // const progressWidth = cardWdith * percentage;
  const progressWidth = "400px";

  return (
    <div className="flex inline-flex w-full bg-paper flex-col rounded-2xl -z-20">
      <div
        className="rounded-2xl p-4 h-full -z-10"
        style={{ background: "red", width: progressWidth }}
      ></div>
      <div className="z-10">{props.children}</div>
    </div>
  );
};

export default Card;
