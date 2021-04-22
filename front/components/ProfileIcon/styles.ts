import styled from 'styled-components';

export const Button = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  border-style: none;
  text-align: left;
  background-color: #fdfdfd;
  & > span {
    vertical-align: super;
    margin-left: 6px;
  }
  &:hover {
    background-color: 333333;
    color: ffffff;
  }
`;
