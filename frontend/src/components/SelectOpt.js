import React, { useState } from "react";
import Select from "react-select";
import bars from "../../src/assets/img/bars.svg";
import "./SelectOpt.css";

const options = [
  {
    value: "cell-phone",
    label: (
      <div className="flex">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </div>
        <div>Cell Phones </div>
      </div>
    ),
  },
  { value: "comp-accs", label: "Computers and Accessories" },
  { value: "tele-vid", label: "Television and Video" },
  { value: "smartwat", label: "SmartWatches" },
  { value: "headphone", label: "Headphone" },
  { value: "cam-pho", label: "Camera and Photo" },
  { value: "vid-games", label: "Video Games" },
  { value: "spo-out", label: "Sports and Outdoors" },
];

export default function SelectOpt() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <img src={bars} alt="bars" width="30px" />
      <Select
        placeholder="All Departments"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
