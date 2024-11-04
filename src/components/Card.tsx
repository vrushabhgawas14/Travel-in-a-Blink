type CardDetails = {
  title: string;
  image: string;
  url: string;
  //   description: string;
};

export default function Card({ title, image, url }: CardDetails) {
  return (
    <>
      <div className="pt-4 pb-10 px-2 m-4 h-[60vh] bg-purple-950 bg-opacity-95 rounded-xl">
        <a href={url} target="_blank">
          <img
            src={image}
            alt="Family"
            className="w-72 h-full object-cover z-10"
          ></img>
        </a>
        <div className="text-center p-2 text-white">{title}</div>
      </div>
    </>
  );
}
