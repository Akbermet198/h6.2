// import styled from "styled-components";
// import "./ExpensesFilter.css"

// const Filter = styled.div`
//   display: flex;
//   color: ${(props)=>props.color}
//   justify-content: center;
// `;

export const ExpensesFilter=( {value, onChange}) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter_control">
                <label htmlFor="select" >Filter by year</label>
                <select name="select" id="" onChange={onChange} value={value}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2018">2019</option>
                </select>
            </div>
        </div>
    )
    }
