import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, SetExpenses] = useState(INITIAL_EXPENSE);

  const UpdateExpenseData = (newExpense) => {
    SetExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <Card>
      <NewExpense onUpdatingExpenseData={UpdateExpenseData} />
      <Expenses expenseData={expenses} />
    </Card>
  );
};

export default App;
