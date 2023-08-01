interface GreenCardProps {
  icon: string;
  title: string;
  text: string;
}

export function GreenCard(props: GreenCardProps) {
  const { icon, title, text } = props;

  return (
    <div className="mx-auto rounded-default bg-darkCyan w-full pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
      <img
        src={icon}
        alt="Background grey"
        className="rounded-default h-[4.5rem] w-auto mx-auto flex self-center"
      />

      <div className="space-y-8 text-lightCream px-8 md:pr-44 lg:pr-36 pt-12 lg:pt-0 flex flex-col self-center md:text-left lg:text-center">
        <h3 className="font-fraunces text-2xl">{title}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
