import React from "react";
import "./card.styles.css";

type CardContainerType = {
  children: JSX.Element | string;
};

export function CardContainer({ children }: CardContainerType) {
  return (
    <div
      className={`p-[2rem] m-[2rem] rounded-lg drop-shadow-2xl justify-center items-center bg-white`}
    >
      {children}
    </div>
  );
}
