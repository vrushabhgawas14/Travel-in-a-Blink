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
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-200">
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
        {/* Reach out to us */}
        <section className="flex flex-col items-center space-y-8 w-full py-24 bg-violet-400">
          <div className="text-5xl sm:text-3xl sm:px-10 text-center">
            Reach out to us via form
          </div>
          <form action="" className="space-y-4 w-[40%] md:w-[60%] sm:w-[80%]">
            <fieldset>
              <input type="text" id="subject" required />
              <label htmlFor="subject">Subject</label>
            </fieldset>
            <div className="flex justify-between sm:space-y-4 sm:flex-col">
              <fieldset>
                <input type="text" id="firstName" required />
                <label htmlFor="firstName">First Name</label>
              </fieldset>
              <fieldset>
                <input type="text" id="lastName" required />
                <label htmlFor="lastName">Last Name</label>
              </fieldset>
            </div>
            <fieldset>
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
            </fieldset>
            <fieldset>
              <input type="text" id="message" required />
              <label htmlFor="message">Message</label>
            </fieldset>
            <div className="text-center pt-5">
              <button
                className="px-4 pt-2 pb-1 leading-tight tracking-widest
              bg-purple-950 text-white hover:text-gray-200 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
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
