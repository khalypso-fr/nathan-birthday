"use client";

import ReactCurvedText from "react-curved-text";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export const WebsiteTitle = () => (
  <ReactCurvedText
    width={300}
    height={80}
    cx={152}
    cy={130}
    rx={150}
    ry={100}
    startOffset={90}
    reversed={true}
    text="Nathan-niversaire"
    textProps={{ className: pacifico.className, style: { fontSize: "28" } }}
    textPathProps={{ style: { fill: "white" } }}
    tspanProps={null}
    ellipseProps={null}
    svgProps={null}
  />
);
