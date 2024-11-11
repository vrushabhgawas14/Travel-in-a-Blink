import EndTemplate from "@/components/EndTemplate";
import { Teams } from "@/constants/TeamDetails";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
            <source src="assets/videos/about.mp4" type="video/mp4" />
          </video>
          <div className="text-center text-white px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2">
            <div className="text-4xl sm:text-2xl">Who we are and are Team?</div>
          </div>
        </section>
        {/* About Us */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-300">
          <div className="text-5xl text-center w-[50%] md:w-[70%] sm:w-[95%] sm:text-3xl sm:px-10">
            Your Vacation Must Be As Unique As You Are!
          </div>
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          <div className="text-xl text-center leading-8 w-[60%] md:w-[80%] sm:w-[80%]">
            We at Travel in a Blink, Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Distinctio quasi, provident debitis voluptate
            minima sequi quam voluptas. Quia quam error minus libero quas!
            Laboriosam voluptate soluta iusto laborum velit vitae modi totam
            ipsum sequi, exercitationem suscipit esse recusandae! Quae neque.
          </div>
          <Link
            href="/services"
            className="px-10 py-4 text-xl leading-tight tracking-widest bg-purple-950 text-gray-300 cursor-pointer hover:text-gray-100"
          >
            Learn More
          </Link>
        </section>
        {/* Vision + Mission */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-200">
          <div className="text-5xl text-center w-[50%] md:w-[70%] sm:w-[100%] sm:text-3xl sm:px-10">
            Our Mission + Vision
          </div>
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          <div className="text-xl text-center leading-8 space-y-10 w-[60%] md:w-[80%] sm:w-[80%]">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magni provident corporis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis magni.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis.
            </li>
          </div>
        </section>
        {/* Our Team */}
        <section className="flex flex-col items-center space-y-6 w-full py-24 bg-violet-300">
          <div className="text-5xl text-center w-[50%] md:w-[70%] sm:w-full sm:text-3xl sm:px-10">
            Our Travel Specialists
          </div>
          <div className="border-b-4 border-purple-950 w-[30%] md:w-[50%] sm:w-[70%]" />
          <div className="flex flex-wrap justify-center items-center">
            {Teams.map((item) => (
              <div
                key={item.key}
                className="text-center my-12 px-10 h-[60vh] md:h-[40vh] sm:h-[50vh]"
              >
                <Image
                  key={item.key}
                  src={item.img}
                  width="0"
                  height="0"
                  sizes="100vw"
                  loading="lazy"
                  quality={70}
                  alt={item.title}
                  className="w-80 h-full object-cover"
                />
                <h1 className="text-lg pt-2 font-bold">
                  {item.title.toUpperCase()}
                </h1>
                <h2>{item.role}</h2>
              </div>
            ))}
          </div>
        </section>
        {/* Lets Plan Your Trip */}
        <EndTemplate
          title="Ready to Get Away?"
          url="/plans"
          urlText="Let's Plan Your Trip"
        />
      </main>
    </>
  );
}
