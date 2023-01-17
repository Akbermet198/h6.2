import { ExpensesItem } from "../ExpenseItem/ExpensesItem";
import { useState } from "react";
import { ExpensesFilter } from "../expensesFilter/ExpensesFilter.jsx";
import { Chart } from "../Charts/Chart";
import styled from "styled-components";



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
    <ExpenseDiv>
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
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
    </ExpenseDiv>
  );
};
const ExpenseDiv = styled.div`
  padding: 10px;
  width: 780px;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #1f1f1f;
  border: none;
  border-radius: 10px;
`;