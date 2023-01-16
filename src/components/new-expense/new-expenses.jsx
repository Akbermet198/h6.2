import { useState } from "react"
import { ExpenseForm } from "../expensesForms/expenseForm"
import Button from "../UI/button/button"
import './new-expense.css'





 export const NewExpence = (props)=>{

const [ showForm, setShowform] = useState(false)
  const showExpenseForm = ()=>{
    setShowform((prevState)=>{
      return  !prevState
    })
  }
 return(
  <div  className="newExpense">
   {showForm ? (
   <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={props.onNewExpenseAdd}/>
    )
   :(<Button title='Добавить новый расход' onClick= {showExpenseForm} /> )}
  
  </div>
 )
}