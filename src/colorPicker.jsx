import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { colorData } from "./colorData";

function ColorPicker({ onColorChange, theme = "light" }) {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    onColorChange(color.hex);
  };

  const togglePickerVisibility = () => {
    setPickerVisible(!isPickerVisible);
  };

  // Apply custom styles to SketchPicker based on the current theme
  const pickerStyles = {
    default: {
      picker: {
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      },
    },
  };

  return (
    <div className="absolute bottom-20 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col gap-4 p-2 bg-white rounded-2xl shadow-lg">
      {/* Predefined color buttons */}
      <div className="flex gap-4">
        {colorData.map((color) => (
          <div
            className="relative group"
            key={color.name}
            onClick={() => handleColorChange(color)}
          >
            <div
              className="w-10 md:w-12 h-10 md:h-12 rounded-full cursor-pointer shadow-lg"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="absolute bottom-24 lg:bottom-16 left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs md:text-sm px-2 py-1 rounded-md">
              {color.name}
            </div>
          </div>
        ))}
        <div
          className={`${
            isPickerVisible
              ? "bg-colorWheel bg-black bg-opacity-50 bg-blend-multiply"
              : "bg-colorWheel"
          } bg-no-repeat bg-center bg-cover w-10 md:w-12 h-10 md:h-12 rounded-full relative`}
          onClick={togglePickerVisibility}
        ></div>
        {isPickerVisible && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
            <SketchPicker
              color={selectedColor}
              onChangeComplete={handleColorChange}
              styles={pickerStyles}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
