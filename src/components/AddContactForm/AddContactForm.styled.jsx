import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormSection = styled(Form)`
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #ebeef0;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
`;

export const Input = styled(Field)`
  height: 35px;
  width: 250px;
  border-color: blue;
  border-radius: 8px;

  :hover,
  :focus {
    border-color: #5eff00;
  }
`;

export const Btn = styled.button`
  width: 250px;
  height: 35px;
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 20px;
  border-color: #fa9e25;
  background-color: #fa9e25;
  :hover,
  :focus {
    background-color: #ff9811;
    color: blue;
  }
`;

export const TitleForForm = styled.h3`
  font-weight: 200;
  font-size: 26px;
  margin-top: 20px;
`;

export const ErrorM = styled(ErrorMessage)`
  color: #ff0000;
  margin-bottom: 8px;
  font-weight: 100;
  font-size: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: end;
`;
