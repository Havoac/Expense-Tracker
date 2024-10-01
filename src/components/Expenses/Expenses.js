import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import FilterItem from "./FilterItem";

function Expenses(props) {
  const [filteredYear, SetFilteredYear] = useState("2020");

  const ChangeFilterHandler = (selectedYear) => {
    SetFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <FilterItem
        selectedYear={filteredYear}
        OnChangeFilter={ChangeFilterHandler}
      />
      <ExpenseItem expenseData={props.expenseData[0]} />
      <ExpenseItem expenseData={props.expenseData[1]} />
      <ExpenseItem expenseData={props.expenseData[2]} />
    </Card>
  );
}

export default Expenses;
