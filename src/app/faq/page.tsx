import Video from "@/components/VideoSection";

export const metadata = {
  title: "FAQ",
};

export default function FAQ() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video src="assets/videos/faq.mp4" title="FAQ" />
        <section className="pt-0 bg-red-500">I am again something new</section>
        <section className="pt-10 bg-yellow-400">
          I am again something new
        </section>
      </main>
    </>
  );
}
