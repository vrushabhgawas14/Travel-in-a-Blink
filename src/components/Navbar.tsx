export default function Navbar() {
  return (
    <>
      <div className="flex p-2 m-4 space-x-4 text-2xl">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="/tour">Tour</a>
        </div>
        <div>
          <a href="/offers">Offers</a>
        </div>
        <div>
          <a href="/explore">Explore</a>
        </div>
      </div>
    </>
  );
}
