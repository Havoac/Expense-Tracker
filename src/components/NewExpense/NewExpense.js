import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const SaveTheData = (expenseData) => {
    props.onUpdatingExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpenseData={SaveTheData} />
    </div>
  );
};

export default NewExpense;
