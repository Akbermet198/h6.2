import { useState } from "react"
import { ExpenseForm } from "../expensesForms/expenseForm"
import './new-expense.css'
import styled from "styled-components"

const ButTon = styled.button`
margin: 5px;
border: none;
border-radius: 5px;
background-color:  #4A026B;
color: white;
padding: 10px 20px;
`
const Newexpence = styled.div`
background-color:  #AD9BE9;
width: 780px;
padding: 10px;
border-radius: 12px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
`


 export const NewExpence = (props)=>{

const [ showForm, setShowform] = useState(false)
  const showExpenseForm = ()=>{
    setShowform((prevState)=>{
      return  !prevState
    })
  }
 return(
  <Newexpence>
 {showForm ? (
   <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={props.onNewExpenseAdd}/>
    )
   :(<ButTon onClick= {showExpenseForm}>Добавить новый расход </ButTon>)}
  

  </Newexpence>
  

 )
}