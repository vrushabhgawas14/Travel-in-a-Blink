import Video from "@/components/VideoSection";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video src="assets/videos/contact.mp4" title="Contact Us" />
        <section className="pt-0 bg-red-500">I am again something new</section>
        <section className="pt-10 bg-yellow-400">
          I am again something new
        </section>
      </main>
    </>
  );
}
