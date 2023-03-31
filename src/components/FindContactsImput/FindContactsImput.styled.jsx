import styled from 'styled-components';

export const Input = styled.input`
  height: 35px;
  width: 250px;
  border-color: blue;
  border-radius: 8px;

  :hover,
  :focus {
    border-color: #5eff00;
  }
`;

export const TitleForLabel = styled.h3`
  font-weight: 200;
  font-size: 20px;
  margin-right: 10px;
`;

export const FilterDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  width: 550px;
  background-color: #ebeef0;
`;
