import LanguageSwitcher from "../components/LanguageSwitcher";
import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "nl" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  const products = dict.products as Record<string, string>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button>{products.cart}</button>
      <LanguageSwitcher />
    </div>
  ); // Add to Cart
}
