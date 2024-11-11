import Image from "next/image";
import Link from "next/link";

type CardDetails = {
  title: string;
  image: string;
  url: string;
  description: string;
  isPlansPage?: boolean;
};

export default function Card({
  title,
  image,
  url,
  description,
  isPlansPage,
}: CardDetails) {
  return (
    <>
      <div
        className={`pt-4 pb-10 px-2 m-4 bg-purple-950 bg-opacity-95 rounded-xl md:h-[40vh] ${
          isPlansPage ? "h-[70vh] sm:h-[60vh] pb-20" : "h-[60vh]"
        }`}
      >
        <div className="relative h-full">
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            quality={70}
            alt="Plan Images"
            className={`h-full object-cover sm:w-72 md:w-80 ${
              isPlansPage ? "w-72" : "w-64"
            } `}
          />
          <div className="absolute top-0 pt-8 px-4 text-lg text-center text-white bg-black bg-opacity-50 h-full opacity-0 hover:opacity-100 ease-in duration-200 overflow-hidden">
            {description}
          </div>
        </div>

        <div className="text-center py-2 text-white text-xl">{title}</div>
        <div className={`text-center ${isPlansPage ? "block" : "hidden"}`}>
          <Link
            href={url}
            className="bg-purple-950 px-4 text-lg text-white border-2 border-violet-300 rounded-2xl ease-in duration-200 hover:bg-purple-900 sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
