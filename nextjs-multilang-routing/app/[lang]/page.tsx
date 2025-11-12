import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "nl" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  const products = dict.products as Record<string, string>;
  return <button>{products.cart}</button>; // Add to Cart
}
