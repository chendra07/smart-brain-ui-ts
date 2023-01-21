import React from "react";

type CardContainerType = {
  children: JSX.Element | string;
  className?: string;
};

function Container({ children, className = "" }: CardContainerType) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default {
  Container,
};
