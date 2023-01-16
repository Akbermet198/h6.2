import { useState } from 'react';
import './App.css';
// import classes from './components/Charts/Chart.module.css' 
import { Expenses } from './components/expenses/Expenses';
import { NewExpence } from './components/new-expense/new-expenses';

const expensesDefault =[
  {
    title: 'Шампунь',
    price: 400,
    date:  " 2022-11-10" ,
  },
  {
    title: 'Зарядник',
    price: 200,
    date:   "2021-01-11" ,
  },
]
function App() {

  const [expenses, setExpenses ] = useState(expensesDefault) 

const addNewExpenseHandler = (data )=>{
  console.log("asdhasd")
  const updatedExpenses = [...expenses]
  updatedExpenses.push(data)
  setExpenses(updatedExpenses)


  }  


  return (
    <div /* className={classes.chartGreen} */>
       <NewExpence onNewExpenseAdd={addNewExpenseHandler}/>
     <Expenses expenses = {expenses}/>
    
    </div>
  );
}

export default App;