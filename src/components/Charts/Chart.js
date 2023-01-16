// import './Chart.css'
import { ChartBar } from "./ChartBar";
// import classes from './Chart.module.css'
import styled from "styled-components";

const Container = styled.div`
  padding: ${(props) => props.padding};
  border-radius: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10rem;
  width: 650px;
  height: 60px;
  margin-left: 20px;
  background-color:  #F8DFFF;
  

  background-color: ${(props) =>
    props.theme === "#313131" ? "#313131" : "violet"};

  background-color: #F8DFFF;
`


export const Chart = (props, theme) => {
  const months = [
    {
      label: "January",
      currentPrice: 0,
    },
    {
      label: "February",
      currentPrice: 0,
    },
    {
      label: "March",
      currentPrice: 0,
    },
    {
      label: "April",
      currentPrice: 0,
    },
    {
      label: "May",
      currentPrice: 0,
    },
    {
      label: "June",
      currentPrice: 0,
    },
    {
      label: "July",
      currentPrice: 0,
    },
    {
      label: "August",
      currentPrice: 0,
    },
    {
      label: "September",
      currentPrice: 0,
    },
    {
      label: "Oktober",
      currentPrice: 0,
    },
    {
      label: "November",
      currentPrice: 0,
    },
    {
      label: "December",
      currentPrice: 0,
    },
  ];

  props.expenses.forEach((element) => {
    const newDate = new Date(element.date);
    const monthNumber = newDate.getMonth();
    months[monthNumber].currentPrice += element.price;
  });

  // const getClassname = ()=>{
  //   return `${classes.chart}
  //    ${theme === "violet" ? classes.chartViolet : classes.chartGreen}`
  // }
  return (
    <Container theme={theme} padding={"4rem"}>
      {/* <StyleButton color='gray' >text</StyleButton> */}
      {months.map((element) => {
        return (
          <ChartBar
            key={element.label}
            label={element.label}
            currentPrice={element.currentPrice}
          />
        );
      })}
    </Container>
  );
};
