import { NavFirstHalf, NavSecondHalf } from "@/constants/NavbarDetails";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center w-full text-2xl font-semibold py-10">
        <div className="flex justify-evenly w-[38%] py-2">
          {NavFirstHalf.map((item) => (
            <a key={item.id} href={item.url} target="_blank">
              {item.text}
            </a>
          ))}
        </div>
        <div className="text-center font-bold text-4xl w-[24%]">
          <a href="/">Travel in a Blink</a>
        </div>
        <div className="flex justify-evenly w-[38%] py-2">
          {NavSecondHalf.map((item) => (
            <a key={item.id} href={item.url} target="_blank">
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
