import "server-only";

type Dictionary = {
  [key: string]: string | Dictionary;
};

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  nl: () =>
    import("../../dictionaries/nl.json").then((module) => module.default),
};

export const getDictionary = async (
  locale: keyof typeof dictionaries
): Promise<Dictionary> => {
  const dictionaryLoader = dictionaries[locale];
  if (!dictionaryLoader) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
  return dictionaryLoader();
};
