import React from "react";
import Header from "../Components/Header";
import HeroImage from "../Components/HeroImage";
import ImageGrid from "../Components/ImageGrid";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroImage />
        <ImageGrid />
      </div>
    </>
  );
}
