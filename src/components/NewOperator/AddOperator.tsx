import React, { FormEvent, useState } from "react";
import { nologo } from "@/assets";
import { IOperator, operators } from "@/interfaces/Operators";
import { useRouter } from "next/router";
import { Input } from "../UI/Input/Input";
import styles from "./AddOperator.module.css";
import { Alert } from "../Alert/Alert";
import { P } from "../UI/P/P";
import { Button } from "../UI/Button/Button";

export const AddOperator: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [alertName, setAlertName] = useState("");
  const router = useRouter();

  const changeInputValue = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event?.target.value);
  };

  const validOperatorName = (text: string): boolean => {
    return !/[^A-Za-zА-Яа-я0-9\s-]/g.test(text);
  };

  const pushNewOperator = (newOperator: IOperator) => {
    if (
      !operators.find(
        (operator) =>
          operator.name.toLowerCase() === newOperator.name.toLowerCase()
      ) &&
      operators.length < 10
    ) {
      operators.push(newOperator);
      setAlertName("Operator " + newOperator.name + " added");
    }
  };

  const closeAlert = () => {
    setAlertName("");
  };

  const addOperator = (event?: FormEvent) => {
    event?.preventDefault();
    if (name && name != null && name != undefined && validOperatorName(name)) {
      pushNewOperator({
        id: name,
        name: name.trim().replace(/\s+/g, " "),
        image: nologo,
      });
      router.push("/");
    } else if (!validOperatorName(name)) {
      setAlertName("The operator name has the wrong format or length");
    }
  };

  return (
    <>
      {" "}
      <div className={styles.addoperatordiv}>
        <P $l className={styles.add}>
          Add new operator
        </P>
        <form className={styles.card} onSubmit={addOperator}>
          <Input
            type={"text"}
            placeholder={"Enter operator's name"}
            value={name}
            handler={changeInputValue}
          />
          <Button $ghost>Add</Button>
        </form>
      </div>
      {alertName && <Alert alertMessage={alertName} closeAlert={closeAlert} />}
    </>
  );
};
