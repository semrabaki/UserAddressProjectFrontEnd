import React, { useState } from "react";
import "./Form.css";
import Form02 from "./Form02";

function Form01() {

  const [form, setForm] = useState({ firstname: "", lastname: "", email: "" });

  const { firstname, lastname, email } = form;
  console.log("FORM", form);

  function Update(event) {
    const { name, value } = event.target;
    console.log(event.target)
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  }

 
    const [show, setShow] = useState(false);
    console.log(show);
    function showForm2() {
      setShow(!show);
    }
   
  return (
   <div>
   {!show?
  <div className="alan">
      {firstname && (
        <h1>
          Welcome {firstname} {lastname}
        </h1>
      )}
      <form>
      <fieldset>
        <legend>Enter User Information Below</legend>
        <label>First Name:</label><input
          className="input"
          type="text"
          placeholder="First Name"
          name="firstname"
          required
          onChange={Update}
          value={firstname}
        />
        <label>Last Name:</label>
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          name="lastname"
          required
          onChange={Update}
          value={lastname}
        />
        <label>email:</label>
        <input
          className="input"
          type="email"
          placeholder="Enter you e-mail"
          name="email"
          onChange={Update}
          value={email}
        />
  
        <br></br>
        <br></br>
        <button type="Submit" onClick={showForm2}>Submit and Enter Address Data</button>
        {show && <Form02/>}
        {/* {!show&&<Form01/>} */}
        </fieldset>
      </form>
    </div>
    :<Form02/>}
    </div>
  );
}

export default Form01;
