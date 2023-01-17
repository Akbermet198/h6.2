import { useState } from "react";

import styled from "styled-components";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setprice] = useState(0);
  const [date, setDate] = useState("");

  // title Event

  const titleInputChangeHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  // price Event
  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setprice(event.target.value);
    }

    // console.log(event.target.value)
  };

  // Date Event
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      price,
      date,
    };

    props.onNewExpenseAdd(expenseData);
  };

  // cancelHandler()
  return (
    <Form>
      <FirstDiv>

        <div>
          <StyledLabel htmlFor="title">Название</StyledLabel>
          <Input
            id="name"
            htmlFor="title"
            labelName="Название"
            inputType="text"
            placeholder="Введите текст"
            onChange={titleInputChangeHandler}
            value={title}
          ></Input>
        </div>

        <div>
          <StyledLabel htmlFor="date">Дата</StyledLabel>
          <Input
            id="date"
            labelName="Дата"
            name="date"
            type="date"
            placeholder="дд.мм.гггг"
            value={date}
            onChange={dateInputChangeHandler}
          ></Input>
        </div>
      </FirstDiv>

      <SecondDiv>
         
          <StyledLabel htmlFor="price">Price</StyledLabel>
          <Input
            id="price"
            name="price"
            labelName="Количество денег"
            inputType="number"
            value={price}
            onChange={priceInputChangeHandler}
          ></Input>
         
      </SecondDiv>

      <ThirdDiv>
        <ButTon onClick={cancelHandler}>Отмена</ButTon>

        <ButTon onClick={saveHandler}>Дабавить</ButTon>
      </ThirdDiv>
    </Form>
  );
};

const ButTon = styled.button`
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #4a026b;
  color: white;
  padding: 10px 20px;
`;

const Form = styled.form`
  background-color: #ad9be9;
  color: #000000;
  display: flex;
  flex-direction: column;
  width: 780px;

  margin: 0 auto;
  border-radius: 10px;
`;
const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const SecondDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const ThirdDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  margin-bottom: 0;
  margin-right: 0;
`;
const Input = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 6px;
  border: none;
  margin-top: 10px;
  padding: 0 10px;
`;

const StyledLabel = styled.label`
 color: #1f1f1f;
 font-size: 1rem;
 font-weight: 500 ;
`;
