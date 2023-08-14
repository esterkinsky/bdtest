import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}

export const Button = ({
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
        [styles.primary]: appearance == "primary",
      })}
      {...props}
    ></button>
  );
};
