import Link from "next/link";

const About = () => {
  return (
    <div className="gap-8 flex flex-row">
      <Link className="p-5 bg-amber-600 rounded-2xl" href="about/misyon">
        Misyon
      </Link>
      <Link className="p-5 bg-amber-600 rounded-2xl" href="about/vizyon">
        Vizyon
      </Link>
      <Link className="p-5 bg-amber-600 rounded-2xl" href="about/ekip">
        Ekip
      </Link>
    </div>
  );
};

export default About;
