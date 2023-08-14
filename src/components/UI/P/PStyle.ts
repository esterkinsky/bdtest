import styled, { css } from "styled-components";

export const P = styled.p<{ $s?: boolean; $m?: boolean; $l?: boolean }>`
  margin: 0;

  ${(props) =>
    props.$s &&
    css`
      font-size: 14px;
      line-height: 24px;
    `}

  ${(props) =>
    props.$m &&
    css`
      font-size: 16px;
      line-height: 24px;
    `}

	${(props) =>
    props.$l &&
    css`
      font-size: 18px;
      line-height: 29px;
    `}
`;
