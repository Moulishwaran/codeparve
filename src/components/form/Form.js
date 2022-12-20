import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="dog">
          <h3>Adopt a Pet</h3>
          <p>What pet do you to adopt ?</p>
          <label for="pet type">Pet type</label>
          <select>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
          <label for="breed">Breed type</label>
          <select>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </div>
        <div className="customer">
          <h3>Please fill in your Details</h3>
          <label>Full Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Phone</label>
          <input type="number" />

          <button className="request">REQUEST FOR ADOPTION</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
