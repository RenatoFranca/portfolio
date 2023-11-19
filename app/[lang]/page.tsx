import styles from "./page.module.css";
import { getDictionary } from "./dictionaries";

type Props = {
  params: {
    lang: string;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{dict.home.helloWorld}</p>
      </div>
    </main>
  );
}
