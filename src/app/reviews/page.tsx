export default function Reviews() {
  return (
    <>
      <div>
        {/* Video Goes Here! */}
        <div className="h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 -z-10 w-full h-full object-cover"
          >
            <source src="assets/reviews.mp4" type="video/mp4" />
          </video>
          <div className="text-center text-white px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2">
            <div className="text-4xl sm:text-2xl">Reviews</div>
          </div>
        </div>
        <div className="pt-0 bg-red-500">I am again something new</div>
        <div className="pt-10 bg-yellow-400">I am again something new</div>
      </div>
    </>
  );
}