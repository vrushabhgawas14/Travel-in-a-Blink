export default function Home() {
  return (
    <>
      <div className="">
        <div className="h-[100vh]">
          I am Home page
          <div className="">
            <video
              autoPlay={true}
              muted
              loop
              className="absolute top-0 -z-10
            min-w-full min-h-full"
            >
              <source src="assets/plans.mp4" type="video/mp4" />
            </video>
          </div>
          I am out of video
        </div>
        <div className="pt-10">I am again something new</div>
      </div>
    </>
  );
}
