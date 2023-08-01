interface HowItWorksCardProps {
  step: string;
  title: string;
  text: string;
}

export function HowItWorksCard(props: HowItWorksCardProps) {
  const { step, title, text } = props;

  return (
    <div className="text-center md:text-left lg:text-left">
      <h2 className="text-5xl font-fraunces text-paleOrange">{step}</h2>
      <h3 className="text-3xl font-fraunces text-darkGreyBlue">{title}</h3>
      <p className="text-sm text-darkGreyBlue leading-6">{text}</p>
    </div>
  );
}
