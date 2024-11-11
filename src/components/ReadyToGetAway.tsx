import Link from "next/link";

export default function ReadyToGetAway() {
  return (
    <>
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
    </>
  );
}
