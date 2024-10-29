export default function Home() {
  return (
    <>
      <div>
        {/* Video Goes Here! */}
        <div className="h-screen overflow-hidden">
          I am Home page
          <div className="">
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 -z-10 w-full h-full object-cover"
            >
              <source src="assets/plans.mp4" type="video/mp4" />
            </video>
          </div>
          I am out of video
        </div>
        <div className="pt-0 bg-red-500">I am again something new</div>
        <div className="pt-10 bg-yellow-400">I am again something new</div>
      </div>
    </>
  );
}
