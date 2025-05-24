"use client";

import { FaChevronDown } from "react-icons/fa";

type ScrollDownButtonProps = {
  targetId: string;
};

export const ScrollDownButton = ({ targetId }: ScrollDownButtonProps) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      className="absolute flex bottom-0 flex-col items-center justify-center group"
      onClick={handleScroll}
      aria-label="Przewiń w dół, aby zobaczyć więcej"
    >
      <span
        aria-hidden="true"
        className="font-semibold text-xl text-white  group-hover:text-zbr transition duration-300 delay-75 
      group-focus:text-primary md:block hidden"
      >
        PRZEWIŃ
      </span>
      <FaChevronDown
        size={32}
        className="text-white group-hover:text-zbr transition duration-300 delay-75 
      group-focus:text-primary"
      />
    </button>
  );
};
