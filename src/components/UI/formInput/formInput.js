import styled from "styled-components";
import "./formInput.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  align-items: flex-start;
`;


const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id} >{labelName}</label>
      <input
      
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      ></input>
    </Container>
  );
};
export default FormInput;
