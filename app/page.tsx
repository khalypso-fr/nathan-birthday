import styles from "./page.module.css";
import { BirthdayCountdown } from "@/components/BirthdayCountdown";
import { MotherSentences } from "@/components/MotherSentences";
import { WebsiteTitle } from "@/components/WebsiteTitle";

export default function Home() {
  return (
    <main className={styles.main}>
      <WebsiteTitle />
      <BirthdayCountdown />
      <MotherSentences />
    </main>
  );
}
