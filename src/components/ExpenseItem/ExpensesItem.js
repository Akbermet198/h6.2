import styled from "styled-components";
// import "./expensesItem.css";
// this is our component

const ExpenseItem = styled.div`
  background-color: #4b4b4b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: 30px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const P = styled.p`
  color: white;
  margin: ${(props)=>props.margin}

`;
const Date1 = styled.div`
  padding: 12px 16px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 82.11px;
  height: 80px;
  color: #ffffff;
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 18px;
  border: 2px solid white;
  border-radius: 8px;
  background-color: #40005d;
  color: white;
`;
export const ExpensesItem = (props) => {
  const { title, price, date } = props;
  const newDate = new Date(date);
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  const monthNotCorrect = newDate.getMonth();

  const monthArray = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const month = monthArray[monthNotCorrect];

  return (
    <ExpenseItem>
      <Row>
        <Date1>
          <P margin={'0'}>{month}</P>
          <P margin={'0'}>{year}</P>
          <P margin={'0'}>{day}</P>
        </Date1>
       
        <P>{title}</P>
      </Row>

      <Price>{price}com</Price>
    </ExpenseItem>
  );
};
