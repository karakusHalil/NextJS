import Image from "next/image";
import React from "react";
import { string } from "zod";

const Seo = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center my-5">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/9Ur0ai3J85M?si=bjkOKnxgI0UfwU34"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <Image
            src="/images/ferrari.jpeg"
            alt="formula 1"
            width={1980}
            height={1320}
          />
        </div>
      </div>
    </>
  );
};

export default Seo;
