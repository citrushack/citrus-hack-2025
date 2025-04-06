"use client";
import { InputWithClear } from "@/components/ui/input";
import React, { useState } from "react";

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearch: (value: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const Toolbar = ({ data, setSearch }: props) => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (value: string) => {
    setInputValue(value);
    if (value === "") {
      setSearch(data);
    } else {
      const filter = data.filter(
        ({ title, languages }) =>
          title.toLowerCase().includes(value.toLowerCase()) ||
          languages.some((language: string) =>
            language.toLowerCase().includes(value.toLowerCase()),
          ),
      );
      setSearch(filter);
    }
  };

  return (
    <InputWithClear
      className="border-2 border-amber-900 bg-zinc-800 text-amber-100 shadow-inner shadow-black/30 placeholder:text-amber-200/70 focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700"
      id="search"
      placeholder="Search"
      onClear={() => onChange("")}
      value={inputValue}
      onChange={(e) => onChange(e.target.value)}
      maxLength={100}
    />
  );
};

export default Toolbar;
