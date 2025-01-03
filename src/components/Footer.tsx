import {
  ConnectColumn,
  ExploreColumn,
  LearnColumn,
} from "@/constants/FooterDetails";
import { PersonalSocials, Socials } from "@/constants/SocialsDetails";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="flex flex-col bg-violet-400 text-black sm:pt-12"
      >
        {/* Actual Footer */}
        <section className="flex justify-between m-10 sm:flex-col ">
          {/* Left Side */}
          <div className="p-4 space-y-4 text-center">
            <Link href="/" className="text-4xl sm:text-3xl">
              Travel In A Blink
            </Link>
            <div className="flex items-center space-x-4 justify-center">
              {Socials.map((item, index) => (
                <Link key={index} href="#footer">
                  <Image
                    key={index}
                    src={item.svg}
                    width={20}
                    height={20}
                    alt="Socials"
                  />
                </Link>
              ))}
            </div>
            <div className="flex flex-col underline p-4">
              <button>Terms & Conditons</button>
              <button>Privacy Policy</button>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex sm:flex-wrap items-start justify-evenly sm:justify-between lg:w-[60%] md:w-[50%] sm:mt-10">
            <div>
              <h1 className="text-3xl py-4">Learn</h1>
              {LearnColumn.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex flex-col py-2 text-xl underline"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            {/* Explore */}
            <div>
              <h1 className="text-3xl py-4">Explore</h1>
              {ExploreColumn.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex flex-col py-2 text-xl underline"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            {/* Connect */}
            <div>
              <h1 className="text-3xl py-4">Connect</h1>
              {ConnectColumn.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex flex-col py-2 text-xl underline"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="text-center pt-4 pb-2 w-full space-y-2 text-sm">
          <div>
            © 2024 Developed by{" "}
            <a
              href="http://vrushabhgawas14.github.io"
              target="_blank"
              className="underline"
            >
              Vrushabh Gawas
            </a>
            .
          </div>
          <div className="space-x-4 flex items-center justify-center">
            {PersonalSocials.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {item.text}
              </a>
            ))}
          </div>
        </section>
      </footer>
    </>
  );
}
