import Card from "@/components/Card";
import { Forms } from "@/constants/FormsDetails";
import { TripType } from "@/constants/PlansDetails";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        {/* Video Goes Here! */}
        <div className="h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 -z-10 w-full h-full object-cover"
          >
            <source src="assets/home.mp4" type="video/mp4" />
          </video>
          <div className="text-center text-white space-y-4 px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2">
            <div className="text-3xl sm:text-2xl">
              Your Dream Destination is Just a Blink Away!
            </div>
            <div className="text-xl">Discover. Book. Travel - in a Blink!</div>
          </div>
        </div>
        {/* Short Welcome Msg */}
        <div className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-300">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            Welcome to Travel in a Blink
          </div>
          <div className="text-xl text-center leading-8 w-[60%] sm:w-[80%]">
            We believe in creating journeys that are as unique as you are. Our
            passionate, knowledgeable travel specialists are here to help you
            make every trip an unforgettable experience, whether you&apos;re
            venturing out for personal discovery, adventure, or business. When
            you travel with us, your journey unfolds with care, precision, and a
            touch of the extraordinary—all just a blink away.
          </div>
          <div className="italic text-2xl opacity-40 tracking-wide">
            Experience Expand Explore
          </div>
          <a
            href="/about"
            className="px-10 py-4 text-xl leading-tight tracking-widest bg-purple-950 text-gray-300 cursor-pointer hover:text-gray-100"
          >
            Learn More
          </a>
        </div>
        {/* Our Plans */}
        <div className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-200">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            <div>Our Plans</div>
            <div className="text-xl sm:text-lg">The kind of travel</div>
          </div>
          <div className="flex flex-wrap items-center justify-center p-4 h-auto w-full sm:flex-col">
            {TripType.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                url={item.url}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* Reviews */}
        <div className="relative">
          <Image
            src="/assets/images/reviews.jpg"
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            quality={70}
            alt="Reviews"
            className="w-full h-[90vh] sm:h-[80vh]"
          />
          <div className="absolute top-4 w-full text-center text-5xl sm:text-3xl sm:px-10">
            Reviews
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-300 rounded-3xl flex flex-col items-center space-y-4 pt-10 w-[80vw] h-[60vh] sm:h-[50vh] sm:px-5">
            <div className="text-3xl sm:text-2xl text-center font-semibold">
              See What Others Say About Us!
            </div>
            <div>Slider</div>
            <div className="text-center">
              Rated 4.8 / 5 based on{" "}
              <a href="/reviews" target="_blank" className="underline">
                460 reviews.
              </a>
            </div>
          </div>
        </div>
        {/* Need Anything? */}
        <div className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-200">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            <div>Need Anything?</div>
            <div className="text-xl sm:text-lg">
              Access our &quot;How we work&quot; guide + Subscribe!
            </div>
          </div>
          <form className="flex sm:flex-col">
            {Forms.map((item) => (
              <input
                key={item.key}
                type={item.type}
                placeholder={item.placeholder}
                id={item.id}
                className="p-3 m-2 rounded-xl text-black outline-none"
              />
            ))}
            <input
              type="submit"
              value="Subscribe"
              className="p-3 m-2 leading-tight tracking-widest bg-purple-950 rounded-xl text-gray-100 hover:text-gray-300 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
