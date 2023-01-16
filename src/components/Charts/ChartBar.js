import styled from "styled-components";
import "./ChartBar.css";

const Chartbar = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8dfff;
`;
const ChartBarInner = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChartBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;
const ChartBarLabel = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  color: black;
`;

export const ChartBar = (props) => {
  const maximalPrice = 2000;
  const percentage = (props.currentPrice / maximalPrice) * 100;

  return (
    <Chartbar>
      <ChartBarInner>
        <ChartBarFill style={{ height: `${percentage}%` }}> </ChartBarFill>

        <ChartBarLabel>{props.label}</ChartBarLabel>
      </ChartBarInner>
    </Chartbar>
  );
};
