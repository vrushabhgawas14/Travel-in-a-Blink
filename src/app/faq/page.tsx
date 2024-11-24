"use client";

import dynamic from "next/dynamic";
import Loading from "../loading";
import NeedAnything from "@/components/NeedAnything";
import QuestionBox from "@/components/QuestionBox";
import { FAQDetails } from "@/constants/FAQDetails";

const Video = dynamic(() => import("@/components/VideoSection"), {
  loading: () => <Loading />,
  ssr: false, // load on the client side
});

export default function FAQ() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video src="assets/videos/faq.mp4" title="FAQ" />
        {/* Frequently Asked Questions */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-400">
          <div className="text-5xl text-center w-[70%] md:w-[80%] sm:w-[95%] sm:text-3xl sm:px-10">
            Frequently Asked Questions
          </div>
          {/* BorderLine */}
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          {/* Questions */}
          <div className="text-xl text-center lg:w-[60%] w-[80%]">
            {FAQDetails.map((item, itemIndex) => (
              <div key={itemIndex}>
                <h2 className="text-2xl font-bold mt-20 mb-8">
                  {item.section}
                </h2>
                <div className="border-b-2 border-slate-800">
                  {item.content.map((element, elementIndex) => (
                    <QuestionBox
                      key={elementIndex}
                      question={element.question}
                      answer={element.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Need Anything? */}
        <NeedAnything isWhite={true} />
      </main>
    </>
  );
}
