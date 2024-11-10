import Link from "next/link";

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
            <div className="text-4xl sm:text-2xl">Our Services</div>
          </div>
        </section>
        <section className="pt-0 bg-red-500">I am again something new</section>
        <section className="pt-10 bg-yellow-400">
          I am again something new
        </section>
        {/* Lets Plan Your Trip */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-200">
          <div className="text-5xl text-center italic w-[50%] md:w-[70%] sm:w-full sm:text-3xl sm:px-10">
            Ready to Get Away?
          </div>
          <Link
            href="/plans"
            className="px-10 py-4 text-xl leading-tight tracking-widest bg-purple-950 text-gray-300 cursor-pointer hover:text-gray-100 sm:text-lg sm:px-8"
          >
            Let&apos;s Plan Your Trip
          </Link>
        </section>
      </main>
    </>
  );
}
