import React from "react";
import { Operator } from "../Operator/Operator";
import { operators } from "../../interfaces/Operators";
import styles from "./Operators.module.css";
import { P } from "../UI/P/P";

export const Operators: React.FC = () => {
  return (
    <div className={styles.operators}>
      <P $l>Choose your mobile operator</P>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          {operators.map((props) => {
            return <Operator key={props.id} {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};
