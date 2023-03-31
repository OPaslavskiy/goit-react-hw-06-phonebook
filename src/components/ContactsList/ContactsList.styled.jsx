import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;

  background-color: #ebeef0;
  /* justify-content: start;
  align-items: center; */
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

export const Btn = styled.button`
  border-radius: 20px;
  width: 100px;
  border-color: #c5c7c9;
  padding: 5px;
  :hover,
  :focus {
    background-color: #bfbfcc;
    color: #ec5858;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
