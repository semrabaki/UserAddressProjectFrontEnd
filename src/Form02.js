import React, { useState } from "react";
import "./Form.css";

function Form02() {
  const [form, setForm] = useState({number: "", address: "", city: "", country:"",code:"" });

  const { number, address, city, country,code } = form;
  console.log("FORM", form);

  function guncelle(event) {
    const { name, value } = event.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
  }

  return (
    <div className="alan">
     
        <h1>
        Entering the address data...
        </h1>
      <form>
        <label>Phone Number</label>
        <input
          className="input"
          type="text"
          placeholder="Enter you phone number"
          name="number"
          required
          onChange={guncelle}
          value={number}
        />
         <label>Addres</label>
        <input
          className="input"
          type="text"
          placeholder="Enter your address"
          name="address"
          required
          onChange={guncelle}
          value={address}
        />
        <label>City</label>
        <input
          className="input"
          type="text"
          placeholder="City"
          name="city"
          required
          onChange={guncelle}
          value={city}
        />
        <label>Country</label>
        <input
          className="input"
          type="text"
          placeholder="Country"
          name="country"
          required
          onChange={guncelle}
          value={country}
        />
        <label>Post Code</label>
        <input
          className="input"
          type="text"
          placeholder="Post Code"
          name="code"
          required
          onChange={guncelle}
          value={code}
        />

        <button type="submit">Gonder</button>
      </form>
    </div>
  );
}

export default Form02;
