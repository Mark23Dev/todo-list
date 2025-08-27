import React from "react";

const PrioritySelector = () => {
  return (
    <div className="flex gap-2">
      {/* Extreme */}
      <label className="flex items-center gap-2 cursor-pointer text-[12px]">
        <input
          type="radio"
          name="priority"
          value="extreme"
          className="hidden peer"
        />
        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        <span className="peer-checked:font-semibold">Extreme</span>
      </label>

      {/* Moderate */}
      <label className="flex items-center gap-2 cursor-pointer text-[12px]">
        <input
          type="radio"
          name="priority"
          value="moderate"
          className="hidden peer"
        />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
        <span className="peer-checked:font-semibold">Moderate</span>
      </label>

      {/* Low */}
      <label className="flex items-center gap-2 cursor-pointer text-[12px]">
        <input
          type="radio"
          name="priority"
          value="low"
          className="hidden peer"
        />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        <span className="peer-checked:font-semibold">Low</span>
      </label>
    </div>
  );
};

export default PrioritySelector;
