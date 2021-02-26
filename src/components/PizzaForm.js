import React from "react";

const PizzaForm = ({ pizza, handleChange, savePizza }) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          name="topping"
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          onChange={(e) => handleChange(e)}
          value={pizza.topping}
        />
      </div>
      <div className="col">
        <select
          name="size"
          value={pizza.size}
          className="form-control"
          onChange={(e) => handleChange(e)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            name="vegetarian"
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={pizza.vegetarian === true}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            name="vegetarian"
            className="form-check-input"
            type="radio"
            value="Not Vegetarian"
            checked={pizza.vegetarian === false}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button
          type="submit"
          className="btn btn-success"
          onClick={(e) => savePizza(pizza)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
