import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-item__description">
        <h2>{props.expenseData.title}</h2>
        <div className="expense-item__price">${props.expenseData.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
