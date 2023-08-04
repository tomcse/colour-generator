import React from "react";
import { nanoid } from "nanoid";
import SingleColour from "./SingleColour";

const ColourList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColour key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColourList;
