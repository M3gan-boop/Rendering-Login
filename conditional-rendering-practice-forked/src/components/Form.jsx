import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type={props.hide} placeholder="Confirm Password" />
      <button type="submit">{props.input}</button>
    </form>
  );
}

export default Form;
