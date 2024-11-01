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
          <div className="text-center space-y-4 px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2">
            <div className="text-3xl sm:text-2xl">
              Your Dream Destination is Just a Blink Away!
            </div>
            <div className="text-xl">Discover. Book. Travel - in a Blink!</div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-10 w-full py-28 bg-violet-300">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            Welcome to Travel in a Blink
          </div>
          <div className="text-xl text-center leading-8 w-[60%] sm:w-[80%]">
            We believe in creating journeys that are as unique as you are. Our
            passionate, knowledgeable travel specialists are here to help you
            make every trip an unforgettable experience, whether you're
            venturing out for personal discovery, adventure, or business. When
            you travel with us, your journey unfolds with care, precision, and a
            touch of the extraordinary—all just a blink away.
          </div>
          <div className="italic text-2xl opacity-40">
            Experience Expand Explore
          </div>
          <a
            href="/about"
            className="px-10 py-4 text-xl leading-tight tracking-widest bg-purple-950 text-gray-300 cursor-pointer hover:text-gray-100"
          >
            Learn More
          </a>
        </div>
        <div className="pt-10 bg-yellow-400">Testing 2</div>
      </div>
    </>
  );
}
