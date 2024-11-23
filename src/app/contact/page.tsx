import dynamic from "next/dynamic";
import Loading from "../loading";
import EndTemplate from "@/components/EndTemplate";
import Link from "next/link";

export const metadata = {
  title: "Contact",
};

const Video = dynamic(() => import("@/components/VideoSection"), {
  loading: () => <Loading />,
  ssr: false, // load on the client side
});

export default function Contact() {
  return (
    <>
      <main>
        {/* Video Goes Here! */}
        <Video src="assets/videos/contact.mp4" title="Contact Us" />
        {/* Contact Us */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-300">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            <div>Traveler Support + Questions</div>
            <div className="text-xl sm:text-lg mt-6">
              We&apos;re here to help you for general information, head to our{" "}
              <Link href={"/faq"} className="underline">
                FAQ
              </Link>{" "}
              page.
            </div>
          </div>
          <div className="flex justify-between pt-10 lg:w-[60%] w-[80%] sm:flex-col sm:space-y-10">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">Email</div>
              <div className="text-xl p-2 text-center">
                Contact us with inquiries and questions:
              </div>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=xyz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold"
              >
                xyz@gmail.com
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">Phone</div>
              <div className="text-xl p-2">Call or text us 24/7:</div>
              <div className="text-lg font-bold">192 68 34 127</div>
            </div>
          </div>
        </section>
        {/* Fill Travel Form */}
        <EndTemplate
          title="Ready With Plans?"
          url="/plans#TravelForm"
          urlText="Fill Travel Form"
        />
      </main>
    </>
  );
}
