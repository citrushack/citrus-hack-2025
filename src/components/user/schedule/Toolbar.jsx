import { useState } from "react";

const Toolbar = ({ onFilterChange }) => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex items-center justify-end">
      <div className="flex rounded">
        <button
          onClick={() => {
            setSelected("all");
            onFilterChange("all");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "all"
              ? "rounded bg-citrus-red-100 text-white"
              : "bg-citrus-red text-white"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => {
            setSelected("hackweek");
            onFilterChange("hackweek");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "hackweek"
              ? "rounded bg-citrus-red-100 text-white"
              : "bg-citrus-red text-white"
          }`}
        >
          HackWeek
        </button>
        <button
          onClick={() => {
            setSelected("hackathon");
            onFilterChange("hackathon");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "hackathon"
              ? "rounded bg-citrus-red-100 text-white"
              : "bg-citrus-red text-white"
          }`}
        >
          Hackathon
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
