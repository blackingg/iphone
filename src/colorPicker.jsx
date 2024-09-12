import React from "react";
import { colorData } from "./colorData";

function ColorPicker({ onColorChange }) {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex p-2 gap-4 bg-white rounded-2xl shadow-lg">
      {colorData.map((color) => (
        <>
          <div
            className="relative group"
            key={color.name}
            onClick={() => onColorChange(color.hex)}
          >
            <div
              className="w-7 md:w-12 h-7 md:h-12 rounded-full cursor-pointer"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs md:text-sm px-2 py-1 rounded-md">
              {color.name}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default ColorPicker;
