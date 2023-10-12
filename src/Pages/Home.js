import React from "react";
import Header from "../Components/Header";
import Banner1 from "../Assets/banner1.jpg";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div
          style={{
            backgroundImage: `url(${Banner1})`,
            height: "500px",
            width: "120rem",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </>
  );
}
