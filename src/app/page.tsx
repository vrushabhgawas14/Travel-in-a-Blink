"use client";

import Card from "@/components/Card";
import NeedAnything from "@/components/NeedAnything";
import ReviewBox from "@/components/ReviewBox";
import Video from "@/components/VideoSection";
import { TripType } from "@/constants/PlansDetails";
import { ReviewsDetails } from "@/constants/ReviewsDetails";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const goRight = () => {
    const slide: HTMLElement | null = document.getElementById("slider");
    if (slide) {
      slide.scrollLeft += 250;
    }
  };

  const goLeft = () => {
    const slide: HTMLElement | null = document.getElementById("slider");
    if (slide) {
      slide.scrollLeft -= 250;
    }
  };

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
        <section className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-400">
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
          <div className="italic text-2xl opacity-60 tracking-wide">
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
            {TripType.slice(0, 4).map((item, index) => (
              <Card
                key={index}
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
            className="w-full h-[90vh] md:h-[50vh] sm:h-[80vh]"
          />
          <div className="absolute top-4 w-full text-center text-5xl sm:text-3xl sm:px-10">
            Reviews
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-950 rounded-3xl flex flex-col items-center space-y-4 py-10 w-[80vw] h-auto sm:w-[85vw] sm:px-5">
            <div className="text-3xl sm:text-2xl text-center font-semibold text-white">
              See What Others Say About Us!
            </div>
            <div className="flex items-center justify-center w-[80%] sm:w-[90%]">
              <button onClick={goLeft}>
                <Image
                  src={"/assets/svg/backButton.svg"}
                  width={0}
                  height={0}
                  alt="BackButton"
                  className="min-w-8 sm:min-w-5"
                />
              </button>
              <div
                id="slider"
                className="overflow-x-scroll scroll-smooth flex py-4 gap-x-4 border-gray-400 border-2 border-x-0 mx-10 sm:mx-4"
              >
                {ReviewsDetails.map((item, index) => (
                  <ReviewBox
                    key={index}
                    id={item.id}
                    star={item.star}
                    heading={item.heading}
                    msg={item.msg}
                    userName={item.userName}
                    reviewDate={item.reviewDate}
                  />
                ))}
              </div>
              <button onClick={goRight}>
                <Image
                  src={"/assets/svg/nextButton.svg"}
                  width={0}
                  height={0}
                  alt="NextButton"
                  className="min-w-8 sm:min-w-5"
                />
              </button>
            </div>
            <div className="text-center text-white">
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
