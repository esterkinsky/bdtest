import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { PStyle } from './PStyle';

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "$s" | "$m" | "$l";
  children: ReactNode;
}

export const P = ({
  size = "$m",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <PStyle
      
      {...props}
    >
      {children}
    </PStyle>
  );
};
