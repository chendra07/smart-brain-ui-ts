import React from "react";

type RoundedImgType = {
  src: string;
  alt: string;
};

function small({ src, alt }: RoundedImgType) {
  return (
    <img className="rounded-image rounded-image__rounded" src={src} alt={alt} />
  );
}

export default {
  small,
};
