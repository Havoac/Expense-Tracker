import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import FilterItem from "./FilterItem";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, SetFilteredYear] = useState("2020");
  const [filteredExpenses, SetFilteredExpense] = useState(props.expenseData);

  const ChangeFilterHandler = (selectedYear) => {
    SetFilteredYear(selectedYear);

    SetFilteredExpense(
      props.expenseData.filter(
        (expenses) => expenses.date.getFullYear().toString() === selectedYear
      )
    );
  };

  return (
    <Card className="expenses">
      <FilterItem
        selectedYear={filteredYear}
        OnChangeFilter={ChangeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
