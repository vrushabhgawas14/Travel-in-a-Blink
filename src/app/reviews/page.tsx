"use client";

import dynamic from "next/dynamic";
import Loading from "../loading";
import NeedAnything from "@/components/NeedAnything";
import EndTemplate from "@/components/EndTemplate";
import { ReviewsDetails } from "@/constants/ReviewsDetails";
import ReviewBox from "@/components/ReviewBox";
import Image from "next/image";

const Video = dynamic(() => import("@/components/VideoSection"), {
  loading: () => <Loading />,
  ssr: false, // load on the client side
});

export default function Reviews() {
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
        <Video src="assets/videos/reviews.mp4" title="Reviews" />
        {/* Review Slider */}
        <div className="relative lg:h-[90vh] md:h-[50vh] sm:h-[70vh] bg-violet-200">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-950 rounded-3xl flex flex-col items-center space-y-4 pt-10 pb-20 w-[80vw] h-auto sm:w-[85vw] sm:px-5">
            <div className="text-3xl sm:text-2xl text-center font-semibold text-white">
              No Suprise : People Love our Trips!
            </div>
            <div className="flex items-center justify-center w-[80%] sm:w-[100%]">
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
                {ReviewsDetails.map((item) => (
                  <ReviewBox
                    key={item.key}
                    id={item.key}
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
          </div>
        </div>
        {/* Need Anything? */}
        <NeedAnything />
        {/* Drop your Review */}
        <EndTemplate
          title="Drop Your Review."
          url="/reviews"
          urlText="Review Us"
        />
      </main>
    </>
  );
}
