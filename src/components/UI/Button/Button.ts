import styled, { css } from "styled-components";

export const Button = styled.button<{ $primary?: boolean; $ghost?: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-family: "Nunito", sans-serif;
  font-size: 14px;

  ${(props) =>
    props.$primary &&
    css`
      color: var(--white);
      background-color: var(--primary);
      &:hover {
        background-color: var(--primary-hover);
      }
    `}

  ${(props) =>
    props.$ghost &&
    css`
      color: var(--black);
      border: 1px solid var(--gray-light);
      background: none;
      &:hover {
        color: var(--white);
        background-color: var(--gray);
      }
    `}
`;
