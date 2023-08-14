import React, { FormEvent, useState } from "react";
import styles from "./HomeOperators.module.css";
import { Operators } from "@/components/Operators/Operators";
import { AddOperator } from "@/components/NewOperator/AddOperator";
import { P } from "@/components/UI/P/P";

export const HomeOperators: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.descrcont}>
        <div className={styles.description}>
          <div>
            <h1>Description</h1>
            <P size="s">description text</P>
          </div>
        </div>
        <div className={styles.operatorsdiv}>
          <div className={styles.operatorslist}>
            <Operators />
          </div>
          <div className={styles.addoperator}>
            <AddOperator />
          </div>
        </div>
      </div>
    </div>
  );
};
