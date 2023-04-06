import { Pacifico } from "next/font/google";
import styles from "./page.module.css";
import { BirthdayCountdown } from "@/components/BirthdayCountdown";
import { MotherSentences } from "@/components/MotherSentences";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const WebsiteTitle = () => (
  <svg viewBox="0 0 500 70" className={pacifico.className}>
    <path
      id="curve"
      d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
    />
    <text x="147" width="500" fill="white">
      <textPath xlinkHref="#curve">Nathan-niversaire</textPath>
    </text>
  </svg>
);

export default function Home() {
  return (
    <main className={styles.main}>
      <WebsiteTitle />
      <BirthdayCountdown />
      <MotherSentences />
    </main>
  );
}
