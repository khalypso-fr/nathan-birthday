"use client";

import styles from "./page.module.css";
import { MotherSentences } from "@/components/MotherSentences";
import { WebsiteTitle } from "@/components/WebsiteTitle";
import dynamic from "next/dynamic";

const BirthdayCountdown = dynamic(
  () =>
    import("@/components/BirthdayCountdown").then(
      (module) => module.BirthdayCountdown
    ),
  { ssr: false }
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
