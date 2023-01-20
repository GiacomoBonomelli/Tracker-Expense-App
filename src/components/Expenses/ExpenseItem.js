import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // Questa funzione viene chiamata ogni volta che viene creato un ExpenseItem component.
  // const [title,setTitle]= useState(props.title) 
  // useState restituisce un array.
  // Il primo elemento è la variabile stessa,
  // il secondo è la funzione che permette di modificare la variabile.
  // Ogni istanza del component ha un suo stato.
  // Ogni volta che viene modificato lo stato, la funzione restituirà l'ultio valore della variabile.
  
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;