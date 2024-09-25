import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return <div className='expense-item'>
        <ExpenseDate date={props.expenseData.date}/>
        <div className='expense-item__description'>
            <h2>{props.expenseData.title}</h2>
            <div className='expense-item__price'>{props.expenseData.amount}</div>
        </div>
    </div>
}

export default ExpenseItem;