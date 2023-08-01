import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/shared/Button";
import { CollectionCard } from "./components/shared/CollectionCard";
import { GreenCard } from "./components/GreenCard";
import { HowItWorksCard } from "./components/HowItWorksCard";

import mobileHeroImage from "../assets/home/mobile/image-hero-coffeepress.jpg";
import desktopHeroImage from "../assets/home/desktop/image-hero-coffeepress.jpg";
import tabletHeroImage from "../assets/home/tablet/image-hero-coffeepress.jpg";

import granEspresso from "../assets/home/desktop/image-gran-espresso.png";
import planalto from "../assets/home/desktop/image-planalto.png";
import piccollo from "../assets/home/desktop/image-piccollo.png";
import danche from "../assets/home/desktop/image-danche.png";

import beanIcon from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";

function App() {
  return (
    <>
      {/* <div className="h-10 w-10 bg-slate-500">Black</div> */}
      <Header />
      {/* <main className="bg-black max-w-[2000px] mx-auto">{children}</main> */}
      {/* <main className={barlow.className}>{children}</main> */}
      <main className="">
        <section className="hero | relative flex text-lightCream" id="">
          <img
            src={mobileHeroImage}
            height={1000}
            width={1000}
            alt="Hero"
            className="rounded-default md:hidden lg:hidden"
          />
          <img
            src={desktopHeroImage}
            height={1000}
            width={1000}
            alt="Hero"
            className="rounded-default bg-cover hidden md:hidden lg:flex w-full"
          />
          <img
            src={tabletHeroImage}
            height={1000}
            width={1000}
            alt="Hero"
            className="rounded-default bg-cover hidden md:flex lg:hidden"
          />
          <div className="absolute bottom-0 left-0 top-0 right-0 p-12 text-center space-y-6">
            <h1 className="text-4xl font-fraunces">
              Great coffee made simple.
            </h1>
            {/* background: linear-gradient(180deg, rgba(254, 252, 247, 0.00) 0%, #FEFCF7 100%); */}

            <p className="leading-6">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <Button
              route="create-plan"
              text="Create your plan"
              isActive={true}
            />
          </div>
        </section>

        <section
          className="collection-container | grid grid-cols-1 mt-24 text-center"
          id=""
        >
          <h1 className="text-4xl font-fraunces">our collection</h1>
          <CollectionCard
            image={granEspresso}
            title="Gran Espresso"
            text="Light and flavorful blend with cocoa and black pepper for an intense experience"
          />
          <CollectionCard
            image={planalto}
            title="Planalto"
            text="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
          />
          <CollectionCard
            image={piccollo}
            title="Piccollo"
            text="Mild and smooth blend featuring notes of toasted almond and dried cherry"
          />
          <CollectionCard
            image={danche}
            title="Danche"
            text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
          />
        </section>

        <section className="why-choose-us-container | text-center" id="">
          <div className="bg-darkGreyBlue rounded-t-default text-lightCream pt-14 pb-8 px-[1.5rem] h-[54rem] lg:h-[28rem]">
            <div className=" lg:px-96">
              <h3 className=" font-fraunces mb-[1.5rem] text-3xl">
                Why choose us?
              </h3>
              <p className="text-sm leading-6 md:leading-10 lg:leading-10">
                A large part of our role is choosing which particular coffees
                will be featured in our range. This means working closely with
                the best coffee growers to give you a more impactful experience
                on every level.
              </p>
            </div>
          </div>

          <div className="green-card-container | space-y-6 lg:space-y-0 relative -top-[37rem] lg:-top-[10rem] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
            <GreenCard
              icon={beanIcon}
              title="Best quality"
              text="Discover an endless variety of the world’s best artisan coffee
          from each of our roasters."
            />
            <GreenCard
              icon={giftIcon}
              title="Exclusive benefits"
              text="Special offers and swag when you subscribe, including 30% off your first shipment."
            />
            <GreenCard
              icon={truckIcon}
              title="Free shipping"
              text="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
            />
          </div>
        </section>

        <section className="how-it-work-container | space-y-8 md:px-20 lg:px-20 my-24">
          <h2 className="text-2xl font-fraunces text-grey text-center md:text-left lg:text-left">
            How it works
          </h2>
          <div className="card-container | grid md:grid-cols-3 lg:grid-cols-3 gap-10">
            <HowItWorksCard
              step={"01"}
              title="Pick your coffee"
              text="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
            />
            <HowItWorksCard
              step={"02"}
              title="Choose the frequency"
              text="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
            />
            <HowItWorksCard
              step={"03"}
              title="Receive and enjoy!"
              text="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
          world-class coffees curated to provide a distinct tasting experience."
            />
          </div>
          <div className="w-max mx-auto py-10 md:mx-0 lg:mx-0">
            <Button
              route="create-plan"
              text="Create your plan"
              isActive={true}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
