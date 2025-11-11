import LanguageSwitcher from "@/components/LanguageSwitcher";
import Translation from "@/components/Translation";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-32 mt-8">
        <LanguageSwitcher />
        <div className="flex flex-col gap-2 mt-4 text-center">
          <div>
            <Translation id="welcome" />
          </div>
          <div>
            <Translation id="about" />
          </div>
          <div>
            <Translation id="contact" />
          </div>
        </div>
      </div>
    </>
  );
}
