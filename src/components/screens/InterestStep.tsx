import { useState } from "react";
import Chip from "../Chip";

function InterestStep() {
  const [interests, setInterests] = useState([
    { label: "entertainment", selected: true },
    { label: "gamin", selected: false },
    { label: "art", selected: false },
    { label: "animals", selected: false },
    { label: "comedy", selected: true },
    { label: "dance", selected: false },
    { label: "beauty", selected: true },
    { label: "music", selected: false },
    { label: "food & drink", selected: false },
    { label: "sports", selected: true },
    { label: "DIY", selected: false },
    { label: "science & education", selected: true },
    { label: "travel", selected: false },
    { label: "family", selected: false },
    { label: "anime & movie", selected: true },
    { label: "technology", selected: false },
    { label: "outdoors", selected: true },
    { label: "culture", selected: false },
  ]);

  const handleChipToggle = (label: string) => {
    setInterests((prev) => {
      return prev.map((chip) => {
        if (chip.label !== label) return chip;
        return { ...chip, selected: !chip.selected };
      });
    });
  };

  return (
    <>
      <p className="text-lg font-medium leading-normal tracking-wider">
        Choose your interests and get the best video recommendations.
      </p>
      <div className="flex flex-wrap gap-1">
        {interests.map((interest) => (
          <Chip
            key={interest.label}
            label={interest.label}
            selected={interest.selected}
            toggleSelected={handleChipToggle}
          />
        ))}
      </div>
    </>
  );
}

export default InterestStep;
