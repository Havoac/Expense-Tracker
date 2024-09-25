import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expenseData={props.expenseData[0]} />
      <ExpenseItem expenseData={props.expenseData[1]} />
      <ExpenseItem expenseData={props.expenseData[2]} />
    </Card>
  );
}

export default Expenses;
