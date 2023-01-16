import { ExpensesItem } from "../ExpenseItem/ExpensesItem";
import { useState } from "react";
import { ExpensesFilter } from "../expensesFilter/ExpensesFilter.jsx";
import { Chart } from "../Charts/Chart";
import styled from "styled-components";

const Expense = styled.div`
  width: 780px;
  height: 100%;
  margin: 0 auto;
  background-color: #1f1f1f;
  padding-right: 35px;
  padding-bottom: 10px;
  border-radius: 12px;
  
`;

//  ExpensesFilter = styled.div`
// background-color: ${(props)=>props.color}
// `

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = props.expenses.filter((element) => {
    const newDate = new Date(element.date);
    const stringifiedYear = newDate.getFullYear().toString();
    return stringifiedYear === selectedYear;
  });

  return (
    <Expense>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler}/>
        <Chart expenses={filteredItems} />
  

      {filteredItems.map((elem) => {
        return (
          <ExpensesItem
            key={elem.title}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          ></ExpensesItem>
        );
      })}
    </Expense>
  );
};
