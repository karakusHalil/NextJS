import VideoComponent from "@/components/VideoComponent";
import Image from "next/image";
import { Suspense } from "react";

const Seo = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center my-5">
          <Suspense fallback={<p>Loading...</p>}>
            <VideoComponent />
          </Suspense>
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
