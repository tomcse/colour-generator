import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#79af8c");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>Colour Generator:</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          placeholder="#79af8c"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="color-text"
          id="color-text"
          value={color}
          placeholder="#79af8c"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
