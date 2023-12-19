import "server-only";

const dictionaries = {
  ["en"]: () =>
    import("../dictionaries/en.json").then((module) => module.default),
  ["pt-br"]: () =>
    import("../dictionaries/pt-br.json").then((module) => module.default),
} as any;

export const getDictionary = async (locale: string | number) =>
  dictionaries[locale]();
