"use client";

import Typewriter from "typewriter-effect";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const sentences = [
  "Il me tape dans le col...",
  "Ch'uis fatiguée...",
  "J'ai faim...",
  "Tit'e envie de fraises",
  "Imagine il m'aime pas",
];

export const MotherSentences = () => (
  <Typewriter
    options={{
      strings: sentences,
      autoStart: true,
      loop: true,
      wrapperClassName: pacifico.className,
    }}
  />
);
