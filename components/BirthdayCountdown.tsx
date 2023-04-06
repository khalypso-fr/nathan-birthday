"use client";

import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { DateTime, Duration, Interval } from "luxon";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const useCountdown = (until: DateTime) => {
  const [comparisonDate, setComparisonDate] = useState(DateTime.now());
  useEffect(() => {
    const id = setInterval(
      () => setComparisonDate(DateTime.now()),
      Duration.fromObject({ second: 1 }).toMillis()
    );
    return () => clearInterval(id);
  }, []);
  return useMemo(
    () =>
      Interval.fromDateTimes(comparisonDate, until).toDuration([
        "days",
        "hours",
        "minutes",
        "seconds",
      ]),
    [comparisonDate, until]
  );
};

const NathanBirthday = DateTime.fromObject({
  year: 2023,
  month: 5,
  day: 6,
  hour: 12,
  minute: 50,
});

export const BirthdayCountdown = () => {
  const { days, hours, minutes } = useCountdown(NathanBirthday);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", columnGap: "30px" }}
      className={pacifico.className}
    >
      <UnitDisplay unit={days} label="Jours" />
      <UnitDisplay unit={hours} label="Heures" />
      <UnitDisplay unit={minutes} label="Minutes" />
    </div>
  );
};

const useUnit = (unit: number): [string, string] => {
  const paddedUnit = unit.toString().padStart(2, "0");
  const unit1 = paddedUnit[0];
  const unit2 = paddedUnit[1];
  return [unit1, unit2];
};

const UnitDisplay: FC<{ unit: number; label: string }> = ({ unit, label }) => {
  const [unit1, unit2] = useUnit(unit);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "2fr 1fr",
        gap: 10,
        width: "100px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyItems: "center",
          gap: 5,
        }}
      >
        <Unit>{unit1}</Unit>
        <Unit>{unit2}</Unit>
      </div>
      <div style={{ textAlign: "center", fontSize: "1em" }}>{label}</div>
    </div>
  );
};

const Unit: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      background: "white",
      color: "black",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      fontSize: "2em",
    }}
  >
    {children}
  </div>
);
