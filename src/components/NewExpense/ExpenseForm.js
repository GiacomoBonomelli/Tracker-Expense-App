import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // state multipli sono separati l'uno dall'altro
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // un altro modo è quello di usare un solo stato
  /* const [userInput,setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    }) */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // per non perdere il titolo inserito

    // questo qui sotto un altro modo per gestire multipli stati.React fa gli update degli
    // stati ogni tot di volte e scrivendo il codice in questo modo avremo sempre lo stato precedente.

    /* setUserInput((prevState) =>{
            return ({ // restituisco un nuovo oggetto con le chiavi aggiornate
                ...userInput,
                enteredTitle: event.target.value // overwrite della chiave enteredTitle
            })

        }) */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); // per non perdere l'importo inserito
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); // per non perdere la data inserita
  };
  const submitHandler = (event) => {
    event.preventDefault(); // per evitare che avvenga ogni volta il refresh della pagina

    // oggetto con la nuova spesa
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
