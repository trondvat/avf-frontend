import React, { Fragment } from "react";

interface Props {
  title: string;
  text?: string;
  imgPath: string;
  alt: string;
  imageRight?: boolean;
}

const TextPictureCard = ({
  title,
  text,
  imgPath,
  alt,
  imageRight,
}: Props): JSX.Element => {
  const elems = {
    textBlock: (
      <div className="max-w-md m-auto">
        <h1 className="text-center text-4xl font-title">{title}</h1>
        <p className="max-w-md text-xl mt-3 px-3 font-text">{text}</p>
      </div>
    ),
    image: (
      <img
        src={imgPath}
        alt={alt}
        className="max-w-md mt-6 rounded-lg mx-auto w-full"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    ),
  };
  return (
    <div className="flex max-w-7xl mx-auto justify-between flex-wrap mt-28">
      {imageRight ? (
        <>
          {elems.textBlock}
          {" "}
          {elems.image}
        </>
      ) : (
        <>
          {elems.image}
          {" "}
          {elems.textBlock}
        </>
      )}
    </div>
  );
};

TextPictureCard.defaultProps = {
  imageRight: true,
  text: undefined,
};

export default TextPictureCard;
