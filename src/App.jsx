import React, { useState } from "react";
import Form from "./components/Form";
import ColourList from "./components/ColourList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#79af8c").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColourList colors={colors} />
    </main>
  );
};
export default App;
