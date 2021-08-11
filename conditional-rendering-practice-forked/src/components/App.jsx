import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <Form input="Login" hide="hidden" />
      ) : (
        <Form input="Register" />
      )}
    </div>
  );
}

export default App;
