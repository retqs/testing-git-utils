import React, { useState } from "react";

export const Form = () => {
  const [formValue, setFormValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setFormValue(value);
  };

  const onSubmit = () => {
    console.log(formValue, "formValue on submit!");
  };

  return (
    <div>
      <h2>simple form</h2>

      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleChange} value={formValue} />

        <button type="submit">ok</button>
      </form>
    </div>
  );
};
