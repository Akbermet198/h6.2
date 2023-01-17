import styled from "styled-components";

export const ExpensesFilter = ({ value, onChange }) => {
  return (
    <StyledFilterDiv>
      <StyledLabel htmlFor="select">Filter by year</StyledLabel>
      <StyledSelect name="select" id="" onChange={onChange} value={value}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2018">2019</option>
      </StyledSelect>
    </StyledFilterDiv>
  );
};

const StyledFilterDiv = styled.div`
  margin: 10px 10px 20px 10px;
  display: flex;
  color: ${(props) => props.color};
  justify-content: flex-end;
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
  color: white;
  margin-right: 20px;
`;

const StyledSelect = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: none;
`;
