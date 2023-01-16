import { useState } from "react";
// import Button from "../UI/button/button"
// import FormInput from "../UI/formInput/formInput";
// import './expenseform.css'
import styled from "styled-components";

const DeleteBtn = styled.button`
  color: ${(props) => props.color};
`;
const SaveBtn = styled.button`
  color: ${(props) => props.color};
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
`;
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
        <Input
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите текст"
          onChange={titleInputChangeHandler}
          value={title}
        ></Input>

        <Input
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateInputChangeHandler}
        ></Input>
      </FirstDiv>

      <SecondDiv>
        <Input
          id="price"
          labelName="Количество денег"
          inputType="number"
          value={price}
          onChange={priceInputChangeHandler}
        ></Input>
      </SecondDiv>

      <ThirdDiv>
        <DeleteBtn
          color="white"
          /*  title="Отмена"
           */ onClick={cancelHandler}
        >
          Отмена
        </DeleteBtn>
        <SaveBtn
          color="white"
          /*  title="Добавить расходы" */
          onClick={saveHandler}
        >
          Дабавить
        </SaveBtn>
      </ThirdDiv>
    </Form>
  );
};
