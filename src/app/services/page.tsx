import NeedAnything from "@/components/NeedAnything";
import ReadyToGetAway from "@/components/ReadyToGetAway";

export default function Services() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <section className="h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 -z-10 w-full h-full object-cover"
          >
            <source src="assets/videos/service.mp4" type="video/mp4" />
          </video>
          <div className="text-center text-white px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2">
            <div className="text-4xl sm:text-2xl">Services</div>
          </div>
        </section>
        {/* Our Services */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-300">
          <div className="text-5xl text-center w-[50%] md:w-[70%] sm:w-[95%] sm:text-3xl sm:px-10">
            Our Services
          </div>
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          <div className="text-xl text-center leading-8 w-[60%] md:w-[80%] sm:w-[80%]">
            At Travel in a Blink, we specialize in creating tailored travel
            experiences to meet each client&apos;s unique needs. From
            destination discovery to personalized itineraries and seamless
            booking, we ensure every journey is unforgettable and worry-free.
            Our expertise ranges from business travel to adventure vacations,
            all meticulously planned to align with your goals and interests.
          </div>
        </section>
        {/* Our Process */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-200">
          <div className="text-5xl text-center w-[50%] md:w-[70%] sm:w-[100%] sm:text-3xl sm:px-10">
            Our Process
          </div>
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          <div className="text-lg text-center leading-8 space-y-10 list-none w-[80%]">
            <li>
              <p className="text-2xl">Initial Consultation</p>
              <p>
                We start by understanding your travel preferences, budget, and
                any specific requests.
              </p>
            </li>
            <li>
              <p className="text-2xl">Personalized Travel Plan</p>
              <p>
                Our team designs a unique travel plan that balances must-see
                attractions with hidden gems.
              </p>
            </li>
            <li>
              <p className="text-2xl">Booking & Arrangements</p>
              <p>
                We take care of all the bookings, from hotels to activities, for
                a seamless experience.
              </p>
            </li>
            <li>
              <p className="text-2xl">Support Throughout Your Trip</p>
              <p>
                We&apos;re available to assist with any changes or needs while
                you&apos;re on your journey.
              </p>
            </li>
          </div>
        </section>
        {/* Need Anything? */}
        <NeedAnything />
        {/* Lets Plan Your Trip */}
        <ReadyToGetAway />
      </main>
    </>
  );
}
