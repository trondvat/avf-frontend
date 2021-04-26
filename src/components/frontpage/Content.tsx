import React from "react";
import TextPicutreCard from "components/all/TextPictureCard";
import logo from "assets/logo.svg";
import TextPictureCard from "components/all/TextPictureCard";

const Content = (): JSX.Element => {
  console.log(logo);
  return (
    <div>
      <div className="flex max-w-screen-xl mx-auto flex-wrap mt-10 px-10">
        <img className="m-auto w-2/5" src={logo} />
        <h1 className="m-auto block text-7xl break-words max-w-md text-center">
          Abakus' veldedige forening
        </h1>
        <hr className="border-avf-red border-2 rounded-sm w-full mt-14" />
      </div>
      <TextPictureCard
        title="Skikkelig bra test tittel"
        text="Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Delectus sint quo recusandae, 
        unde repellendus explicabo incidunt. Excepturi 
        quasi, aliquam aspernatur earum, temporibus nisi 
        incidunt consequuntur laborum, quod pariatur 
        itaque totam."
        imgPath="https://pics.freeicons.io/uploads/icons/png/7713904961578629619-512.png"
        alt="Helping world image"
      />
    </div>
  );
};

export default Content;
