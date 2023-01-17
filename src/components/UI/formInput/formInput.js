import styled from "styled-components";
import "./formInput.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  align-items: flex-start;
`;
const Label = styled.label`
  height: 25px;
  color: black;
`;
const Input = styled.input`
  width: 100%;
  height: 39px;
  border-radius: 6px;
  border: none;
`;

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}>
      </Input>
    </Container>
  );
};
export default FormInput;
