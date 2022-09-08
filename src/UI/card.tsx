const Card = (props: any) => {
  return (
    <div className="flex inline-flex w-full bg-orange-300 p-4 flex-col rounded-2xl">
      {props.children}
    </div>
  );
};

export default Card;
