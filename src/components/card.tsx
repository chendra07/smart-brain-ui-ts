import React from "react";

type CardContainerType = {
  children: JSX.Element | string;
};

function Container({ children }: CardContainerType) {
  return <div className="card">{children}</div>;
}

export default {
  Container,
};
