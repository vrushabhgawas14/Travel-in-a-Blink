import Card from "@/components/Card";
import NeedAnything from "@/components/NeedAnything";
import Video from "@/components/VideoSection";
import { TripType } from "@/constants/PlansDetails";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video
          src="assets/videos/home.mp4"
          title="Your Dream Destination is Just a Blink Away!"
          subTitle="Discover. Book. Travel - in a Blink!"
        />
        {/* Short Welcome Msg */}
        <section className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-300">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            Welcome to Travel in a Blink
          </div>
          <div className="text-xl text-center leading-8 w-[60%] md:w-[80%] sm:w-[80%]">
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
          <Link
            href="/about"
            aria-label="About Us"
            className="px-10 py-4 text-xl leading-tight tracking-widest bg-purple-950 text-gray-300 cursor-pointer hover:text-gray-100"
          >
            Learn More
          </Link>
        </section>
        {/* Our Plans */}
        <section className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-200">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            <div>Our Plans</div>
            <div className="text-xl sm:text-lg">The kind of travel</div>
          </div>
          <div className="flex flex-wrap items-center justify-center p-4 h-auto w-full sm:flex-col">
            {TripType.slice(0, 4).map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                url={item.url}
                description={item.description}
              />
            ))}
          </div>
        </section>
        {/* Reviews */}
        <section className="relative">
          <Image
            src="/assets/images/reviews1.jpg"
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            quality={70}
            alt="Reviews"
            className="w-full h-[90vh] md:h-[70vh] sm:h-[80vh]"
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
              <Link href="/reviews" target="_blank" className="underline">
                460 reviews.
              </Link>
            </div>
          </div>
        </section>
        {/* Need Anything? */}
        <NeedAnything isWhite={true} />
      </main>
    </>
  );
}
