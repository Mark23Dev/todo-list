import { useState } from "react";

export default function PriorityRadio() {
  const [priority, setPriority] = useState("moderate");

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-gray-700">Priority</legend>

      <div className="grid gap-2 sm:grid-cols-3">
        {/* Extreme */}
        <label className="block">
          <input
            type="radio"
            name="priority"
            value="extreme"
            className="peer sr-only"
            checked={priority === "extreme"}
            onChange={(e) => setPriority(e.target.value)}
          />
          <div className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_0_2px_rgba(255,0,0,0.2)]" />
            <span className="text-sm font-medium">Extreme</span>
          </div>
        </label>

        {/* Moderate */}
        <label className="block">
          <input
            type="radio"
            name="priority"
            value="moderate"
            className="peer sr-only"
            checked={priority === "moderate"}
            onChange={(e) => setPriority(e.target.value)}
          />
          <div className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shadow-[0_0_0_2px_rgba(245,158,11,0.25)]" />
            <span className="text-sm font-medium">Moderate</span>
          </div>
        </label>

        {/* Low */}
        <label className="block">
          <input
            type="radio"
            name="priority"
            value="low"
            className="peer sr-only"
            checked={priority === "low"}
            onChange={(e) => setPriority(e.target.value)}
          />
          <div className="flex items-center gap-3 rounded-lg border p-3 hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
            <span className="h-2.5 w-2.5 rounded-full bg-green-600 shadow-[0_0_0_2px_rgba(22,163,74,0.2)]" />
            <span className="text-sm font-medium">Low</span>
          </div>
        </label>
      </div>

      <p className="text-xs text-gray-500">Selected: <span className="font-medium">{priority}</span></p>
    </fieldset>
  );
}
