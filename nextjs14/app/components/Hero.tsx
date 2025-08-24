import Image from "next/image";

interface HeroProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageUrl2: string;
}

// const Hero: React.FC<HeroProps> = ({
//   imageUrl2,
//   imageUrl,
//   title,
//   description,
// }) => {
//   return <div>Hero</div>;
// };

//Herp component
const Hero = ({ imageUrl2, imageUrl, title, description }: HeroProps) => {
  return (
    <>
      <section className="relative h-screen overflow-hidden w-full">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat bg-black opacity-40"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 w-full h-full">
          <div className="lg:w-1/2 ml-5">
            <h2 className="text-3xl text-white">{title}</h2>
            <p className="text-white mt-2">{description}</p>
          </div>

          <div className="lg:w-1/2 relative ml-20">
            <Image
              alt="f1"
              src={imageUrl2}
              width={500}
              height={500}
              className=" w-full h-auto"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
