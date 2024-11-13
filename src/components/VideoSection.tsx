interface Props {
  src: string;
  title: string;
  subTitle?: string;
}

export default function Video({ src, title, subTitle }: Props) {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 -z-10 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="text-center text-white space-y-4 px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2">
          <div className="text-4xl sm:text-2xl">{title}</div>
          <div className="text-xl">{subTitle}</div>
        </div>
      </section>
    </>
  );
}
