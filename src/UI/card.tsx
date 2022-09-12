const Card = (props: any) => {
  return (
    <div className="flex inline-flex w-full bg-light_green p-4 flex-col rounded-2xl">
      {props.children}
    </div>
  );
};

export default Card;
