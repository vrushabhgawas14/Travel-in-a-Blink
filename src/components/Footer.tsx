import {
  ConnectColumn,
  ExploreColumn,
  LearnColumn,
} from "@/constants/FooterDetails";
import { PersonalSocials, Socials } from "@/constants/SocialsDetails";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="flex flex-col bg-violet-400 text-black sm:pt-20"
      >
        {/* Actual Footer */}
        <div className="flex justify-between m-10 sm:flex-col ">
          {/* Left Side */}
          <div className="p-4 space-y-4 text-center">
            <a href="/" className="text-4xl sm:text-3xl">
              Travel In A Blink
            </a>
            <div className="flex items-center space-x-4 justify-center">
              {Socials.map((item) => (
                <a key={item.key} href="#footer">
                  <Image
                    key={item.key}
                    src={item.svg}
                    width={20}
                    height={20}
                    alt="Socials"
                  />
                </a>
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
              {LearnColumn.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  className="flex flex-col py-2 text-xl underline"
                >
                  {item.text}
                </a>
              ))}
            </div>
            {/* Explore */}
            <div>
              <h1 className="text-3xl py-4">Explore</h1>
              {ExploreColumn.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  className="flex flex-col py-2 text-xl underline"
                >
                  {item.text}
                </a>
              ))}
            </div>
            {/* Connect */}
            <div>
              <h1 className="text-3xl py-4">Connect</h1>
              {ConnectColumn.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  className="flex flex-col py-2 text-xl underline"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="text-center pt-4 pb-2 w-full text-sm">
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
          <div className="space-x-2 flex items-center justify-center">
            {PersonalSocials.map((item) => (
              <a
                key={item.key}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
