import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [titleEntered, SetTitleEntered] = useState("");
  const [amountEntered, SetAmountEntered] = useState("");
  const [dateEntered, SetDateEntered] = useState("");

  const InputChangeHandler = (inputType, value) => {
    if (inputType === "title") SetTitleEntered(value);
    else if (inputType === "amount") SetTitleEntered(value);
    else if (inputType === "date") SetTitleEntered(value);
  };

  const SubmitFormHandler = (event) => {
    event.preventDefault();

    // const expenseData = {
    //   title: titleEntered,
    //   amount: amountEntered,
    //   date: new Date(dateEntered),
    // };

    // console.log(expenseData);

    /* To reset the inputs */
    SetTitleEntered("");
    SetAmountEntered("");
    SetDateEntered("");
  };

  return (
    <form onSubmit={SubmitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEntered}
            onChange={(event) =>
              InputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={(event) =>
              InputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateEntered}
            onChange={(event) => InputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
