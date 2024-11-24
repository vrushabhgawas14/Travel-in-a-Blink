import { Forms } from "@/constants/FormsDetails";

type Props = {
  isWhite?: boolean;
};

export default function NeedAnything({ isWhite }: Props) {
  return (
    <>
      <section
        className={`flex flex-col items-center space-y-10 w-full py-28 ${
          isWhite ? "bg-violet-200" : "bg-violet-400"
        }`}
      >
        <div className="text-5xl sm:text-3xl sm:px-10 text-center">
          <div>Need Anything?</div>
          <div className="text-xl sm:text-lg">
            Access our &quot;How we work&quot; guide + Subscribe!
          </div>
        </div>
        <form className="flex sm:flex-col">
          {Forms.map((item) => (
            <input
              key={item.key}
              type={item.type}
              placeholder={item.placeholder}
              id={item.id}
              className="p-3 m-2 rounded-xl w-64 md:w-52 text-black outline-none"
            />
          ))}
          <input
            type="submit"
            value="Subscribe"
            className="p-3 m-2 leading-tight tracking-widest bg-purple-950 rounded-xl text-gray-100 hover:text-gray-300 cursor-pointer"
          />
        </form>
      </section>
    </>
  );
}
