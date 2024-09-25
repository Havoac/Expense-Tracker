import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    return <div className="expenses">
        <ExpenseItem expenseData={props.expenseData[0]}/>
        <ExpenseItem expenseData={props.expenseData[1]}/>
        <ExpenseItem expenseData={props.expenseData[2]}/>
    </div>
}

export default Expenses;