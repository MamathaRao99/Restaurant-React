import "./form.css";
import React from "react";

const Form = () => {
  return (
      <>
          <div className="container">
              <div className="registartionText">
                  <h1>Registartion Form</h1>
              </div>
              <form className="">
                  <input type="text" placeholder="" />
                  <input type="text" placeholder="" />
              </form>
          </div>
    </>
  );
};

export default Form;
