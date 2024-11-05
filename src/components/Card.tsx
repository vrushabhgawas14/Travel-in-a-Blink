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
          <img
            src={image}
            alt="Family"
            className="w-72 h-full object-cover"
          ></img>
          <div className="absolute top-0 pt-10 px-4 text-xl text-center text-white bg-black bg-opacity-50 h-full opacity-0 hover:opacity-100">
            {description}
          </div>
        </a>
        <div className="text-center p-2 text-white">{title}</div>
      </div>
    </>
  );
}
