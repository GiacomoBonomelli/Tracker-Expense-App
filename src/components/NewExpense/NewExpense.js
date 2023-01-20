import React from 'react'
import './NewExpense.css'
import "./ExpenseForm"
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return(
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
        {/* passo il puntatore della funzione */}
    </div>
    )
}

export default NewExpense