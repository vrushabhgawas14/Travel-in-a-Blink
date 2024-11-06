import Image from "next/image";

type CardDetails = {
  title: string;
  image: string;
  url: string;
  description: string;
};

export default function Card({ title, image, url, description }: CardDetails) {
  return (
    <>
      <div className="pt-4 pb-10 px-2 m-4 h-[60vh] bg-purple-950 bg-opacity-95 rounded-xl">
        <a href={url} target="_blank" className="relative">
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
            quality={70}
            alt="Plan Images"
            className="w-64 h-full object-cover sm:w-72"
          />
          <div className="absolute top-0 pt-8 px-4 text-lg text-center text-white bg-black bg-opacity-50 h-full opacity-0 hover:opacity-100 ease-in duration-200 overflow-hidden">
            {description}
          </div>
        </a>
        <div className="text-center p-2 text-white">{title}</div>
      </div>
    </>
  );
}
