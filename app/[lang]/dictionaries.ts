import "server-only";

const dictionaries = {
  ["en-US"]: () =>
    import("../../dictionaries/en-US.json").then((module) => module.default),
  ["pt-BR"]: () =>
    import("../../dictionaries/pt-BR.json").then((module) => module.default),
} as any;

export const getDictionary = async (locale: string | number) =>
  dictionaries[locale]();
