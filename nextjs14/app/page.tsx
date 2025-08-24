import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        imageUrl="/slider/HondaCivic.jpg"
        imageUrl2="/slider/VISHEL.png"
        title="Welcome to Our Website"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              ullam?"
      ></Hero>
      {/* <div className="flex items-center justify-center h-svh text-4xl ">
        Home Page
      </div> */}
    </>
  );
}
