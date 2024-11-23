import Image from "next/image";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function QuestionBox({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const Plus = "/assets/svg/plus.svg";
  const Minus = "/assets/svg/minus.svg";

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="py-8 space-y-4 border-t-2 border-slate-800 cursor-pointer"
      >
        <div className="flex justify-between">
          <div className="text-start pr-4">{question}</div>
          <Image
            src={isOpen ? Minus : Plus}
            width={20}
            height={20}
            alt="PlusMinusBtn"
          />
        </div>
        <div className={`w-[80%] ${isOpen ? "block text-start" : "hidden"}`}>
          {answer}
        </div>
      </div>
    </>
  );
}
