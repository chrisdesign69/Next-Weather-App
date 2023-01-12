"use client"

import React from "react";

//react-hook-form
import { useFormContext } from "react-hook-form";

//Styles
import styles from "/app/styles/min/Home.module.css";

const NestedInput = ({ register, handleSubmit, submitHandler }) => {
    const data = useFormContext()
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <select name="language" id="" { ...data.register("language") } >
        <option value="de">de</option>
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="it">it</option>
      </select>
      <input
        type="text"
        name="country"
        id="country"
        required
        autoComplete="off"
        { ...data.register("country") }
      />
      <label htmlFor="country">country</label>
    </form>
  );
};

export default NestedInput;
