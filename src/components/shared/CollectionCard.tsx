interface CollectionProps {
  image: any;
  title: string;
  text: string;
}

export function CollectionCard(props: CollectionProps) {
  const { image, title, text } = props;

  return (
    <div className="space-y-4 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-sm md:max-w-xl lg:max-w-3xl mx-auto">
      <img
        src={image}
        alt="Hero"
        className="hero | h-[9.4375rem] w-auto mx-auto"
      />
      <div className=" space-y-4 w-full text-center md:text-left lg:text-center">
        <h2 className="font-fraunces text-2xl">{title}</h2>
        <p className="font-sm text-darkGreyBlue">{text}</p>
      </div>
    </div>
  );
}
