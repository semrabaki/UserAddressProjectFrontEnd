import React, { useState } from "react";
import "./Form.css";

function Form01() {
  // const [ad, setAd] = useState("");
  // const [soyad, setSoyad] = useState("");
  // const [mesaj, setMesaj] = useState("");

  // function adGuncelle(event) {
  //   setAd(event.target.value);
  // }
  // function soyadGuncelle(event) {
  //   setSoyad(event.target.value);
  // }
  // function mesajGuncelle(event) {
  //   setMesaj(event.target.value);
  // }

  const [form, setForm] = useState({ ad: "", soyad: "", mail: "" });

  const { ad, soyad, mail } = form;
  console.log("FORM", form);

  function Guncelle(event) {
    const { name, value } = event.target;
    console.log(event.target)
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  }

  return (
    <div className="alan">
      {ad && (
        <h1>
          Merhaba {ad} {soyad}
        </h1>
      )}
      <form>
      <fieldset>
        <legend>Enter User Information Below</legend>
        <label>First Name:</label><input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required
          onChange={Guncelle}
          value={ad}
        />
        <label>Last Name:</label>
        <input
          className="input"
          type="text"
          placeholder="soyadiniz"
          name="soyad"
          required
          onChange={Guncelle}
          value={soyad}
        />
        <label>email:</label>
        <input
          className="input"
          type="email"
          placeholder="Enter you e-mail"
          name="mail"
          onChange={Guncelle}
          value={mail}
        />
  
        <br></br>
        <br></br>
        <button type="Submit">Submit and Enter Address Data</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form01;
