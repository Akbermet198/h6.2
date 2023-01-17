import styled from "styled-components";
 


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
          <P margin={'0'} fontSize={"16px"} fontWeight={300}>{month}</P>
          <P margin={'0'} fontSize={"20px"} fontWeight={500}>{year}</P>
          <P margin={'0'} fontSize={"30px"} fontWeight={700}>{day}</P>
        </Date1>
       
        <P fontSize={"40px"} fontWeight={900}>{title}</P>
      </Row>

      <Price>{price}com</Price>
    </ExpenseItem>
  );
};

const ExpenseItem = styled.div`
  background-color: #4b4b4b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin: 10px;
    
  border-radius: 10px;
   
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const P = styled.p`
  color: white;
  margin: ${(props)=>props.margin};

  font-size: ${(props)=>props.fontSize};
  font-weight: ${(props)=>props.fontWeight};
   

`;
const Date1 = styled.div`
  padding: 12px  ;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 82.11px;
  height: 80px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
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