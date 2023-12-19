import styles from "./page.module.css";
import { getDictionary } from "./dictionaries";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const lang = headersList.get("X-Selected-Language")!!;

  const dict = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>{dict.home.helloWorld}</p>
      </div>
    </main>
  );
}
