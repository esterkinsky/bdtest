import React, { useEffect } from "react";
import styles from "./Alert.module.css";

export interface IAlertProps {
  alertMessage: string;
  closeAlert: Function;
}

export const Alert: React.FC<IAlertProps> = (props) => {
  useEffect(() => {
    const timerId = setTimeout(props.closeAlert, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [props.alertMessage]);

  return (
    <div className={styles.alert}>
      <div>{props.alertMessage}</div>
    </div>
  );
};
