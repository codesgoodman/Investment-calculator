import React from "react";

const UserInput = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    // props.onCalculate(event.target.value);
    console.log("submit");
  };
  const resetHandler = () => {
    console.log("reset");
  };
  const inputChangeHandler = (input, value) => {};
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
