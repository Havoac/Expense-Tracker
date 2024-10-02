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
      {props.expenseData.map((expense) => (
        <ExpenseItem expenseData={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
