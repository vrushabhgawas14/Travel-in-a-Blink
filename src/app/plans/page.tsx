import Card from "@/components/Card";
import EndTemplate from "@/components/EndTemplate";
import { TripType } from "@/constants/PlansDetails";
import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Plans",
};

const Video = dynamic(() => import("@/components/VideoSection"), {
  loading: () => <Loading />,
  ssr: false, // load on the client side
});

export default function TravelPlans() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video src="assets/videos/plans.mp4" title="Ready to start planning?" />
        {/* Our Plans */}
        <section className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-200">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            <div>Our Trips</div>
          </div>
          <div className="flex flex-wrap items-center justify-center p-8 h-auto w-full sm:flex-col">
            {TripType.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                url={item.url}
                description={item.description}
                isPlansPage={true}
              />
            ))}
          </div>
        </section>
        {/* Travel Form */}
        <section
          id="TravelForm"
          className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-400"
        >
          <div className="text-5xl text-center w-[50%] md:w-[70%] sm:w-[95%] sm:text-3xl sm:px-10">
            Form Goes Here!
          </div>
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          {/* <div className="text-xl text-center leading-8 w-[60%] md:w-[80%] sm:w-[80%]">
            Para
          </div> */}
        </section>
        {/* FAQ */}
        <EndTemplate
          title="Left With Questions?"
          url="/faq"
          urlText="Checkout FAQ's"
        />
      </main>
    </>
  );
}
