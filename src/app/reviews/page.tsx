import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Reviews",
};

const Video = dynamic(() => import("@/components/VideoSection"), {
  loading: () => <Loading />,
  ssr: false, // load on the client side
});

export default function Reviews() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video src="assets/videos/reviews.mp4" title="Reviews" />
        <section className="pt-0 bg-red-500">I am again something new</section>
        <section className="pt-10 bg-yellow-400">
          I am again something new
        </section>
      </main>
    </>
  );
}
