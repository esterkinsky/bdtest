import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import cn from "classnames";
import styles from "./Input.module.css";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
  type: string;
  placeholder: string;
  value?: string;
  handler: (event: { target: { value: React.SetStateAction<string> } }) => void;
}

export const Input = ({ error , type,placeholder, value, handler}: IInputProps): JSX.Element => {
  return (
    <>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        type={type}
        placeholder={placeholder}
        onChange={handler}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error.message}
        </span>
      )}
    </>
  );
};
