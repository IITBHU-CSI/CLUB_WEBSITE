import { useState } from "react";
import { HelmHero } from "../components/team/HelmHero";
import { VerticalOrbit } from "../components/team/VerticalOrbit";
import { VerticalSwitcher } from "../components/team/VerticalSwitcher";
import { YearToggle } from "../components/team/YearToggle";
import { teamData } from "../data/teamData";

const OurTeam = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedVertical, setSelectedVertical] = useState("esp");

  const currentYearData = teamData.find((data) => data.year === selectedYear);
  const currentHelms = currentYearData?.helms || [];
  const currentVerticalMembers = currentYearData?.verticals[selectedVertical] || [];
  const years = teamData.map((data) => data.year);

  return (
    <div className="min-h-screen bg-background flex flex-col font-poppins">
      <header className="py-12 px-6 border-b-2 border-border bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-3">CSI Team</h1>
          <p className="text-muted-foreground text-xl md:text-2xl">
            Club of Sustainability and Innovation
          </p>
        </div>
      </header>

      <HelmHero helms={currentHelms} />
      <VerticalSwitcher
        selectedVertical={selectedVertical}
        onVerticalChange={setSelectedVertical}
      />
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <VerticalOrbit
            members={currentVerticalMembers}
            verticalType={selectedVertical}
          />
        </div>
      </section>
      <footer className="py-12 px-6 border-t-2 border-border bg-gradient-to-t from-background to-secondary/20">
        <div className="container mx-auto">
          <YearToggle
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            years={years}
          />
        </div>
      </footer>
    </div>
  );
};

export default OurTeam;
