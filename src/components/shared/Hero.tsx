import React from "react";

import { Button } from "./Button";

interface HeroProps {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  buttonText: string;
}

export function Hero(props: HeroProps) {
  const { mobileImage, tabletImage, desktopImage, buttonText } = props;

  return (
    <>
      <img
        src={mobileImage}
        height={1000}
        width={1000}
        alt="Hero"
        className="rounded-default md:hidden lg:hidden"
      />
      <img
        src={tabletImage}
        height={1000}
        width={1000}
        alt="Hero"
        className="rounded-default bg-cover hidden md:flex lg:hidden"
      />
      <img
        src={desktopImage}
        height={1000}
        width={1000}
        alt="Hero"
        className="rounded-default bg-cover hidden md:hidden lg:flex w-full"
      />
      <div className="absolute bottom-0 left-0 top-0 right-0 p-12 text-center space-y-6">
        <h1 className="text-4xl font-fraunces">Great coffee made simple.</h1>
        {/* background: linear-gradient(180deg, rgba(254, 252, 247, 0.00) 0%, #FEFCF7 100%); */}

        <p className="leading-6">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button route="/create-plan" text={buttonText} isActive={true} />
      </div>
    </>
  );
}
