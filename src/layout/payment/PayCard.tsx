import InputMask from "react-input-mask";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Preloader } from "../Preloader/Preloader";
import styles from "./PayCard.module.css";
import { Button } from "@/components/UI/Button/Button";
import { Alert } from '@/components';

export function PayCard() {
  const [phoneState, setPhoneState] = useState<string>("");
  const [cardState, setCardState] = useState<string>("•••• •••• •••• ••••");
  const [isPayedState, setIsPayedState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
   const [alertName, setAlertName] = useState("");
  const router = useRouter();

  const handleInputPhone = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhoneState(event.target.value);
  };

  const handleInputNumber = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const text = event.target.value;
    const initial = "•••• •••• •••• ••••";
    if (text.length === 0) {
      setCardState(initial);
    } else {
      const number_card = initial.slice(text.length);
      setCardState(event.target.value + number_card);
    }
  };

  const handleIsPayed = () => {
    const answer = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const random = Math.random() < 0.5;
        random ? resolve(true) : resolve(false);
      }, 2000);
    });
    return answer;
  };

  async function handleSubmit(event?: React.SyntheticEvent) {
    event?.preventDefault();
    try {
      setIsLoading(true);

      await handleIsPayed().then((value) => setIsPayedState(value));
      await setIsLoading(false);
      const isValidPhone = /\+7\d{3}\d{3}\d{2}\d{2}/.test(
        phoneState.toLocaleLowerCase()
      );
      const isValidCard = /\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(cardState);

      if (!isValidPhone) {
		setAlertName("Your mobile number is not valid")
        setIsLoading(false);
        setPhoneState("");
        return;
      }

      if (!isValidCard) {
        setAlertName("Your card number is not valid");
        setIsLoading(false);
        setCardState("•••• •••• •••• ••••");
        return;
      }

      if (!isPayedState) {
        setAlertName("Not enough money");
      }
      if (isPayedState) {
        setAlertName("succes");
        router.back();
      }
      setCardState("•••• •••• •••• ••••");
      setPhoneState("");
    } catch (err) {
      console.error(err);
    }
  }

   const closeAlert = () => {
     setAlertName("");
   };

  return (
    <>
      <div className={styles.paymentscreen}>
        {isLoading ? (
          <Preloader />
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputMask
              mask={"+79999999999"}
              type="text"
              placeholder="Mobile number"
              value={phoneState}
              onChange={handleInputPhone}
              className={styles.input}
            />
            <InputMask
              mask="9999 9999 9999 9999"
              type="text"
              placeholder="Number Card"
              value={cardState}
              onChange={handleInputNumber}
              className={styles.input}
            />
            <Button $primary id="confirmButton">
              Подтвердить
            </Button>
          </form>
        )}

        <div className={styles.default}>
          <div style={{ height: "50%" }}></div>
          <div
            style={{
              height: "50%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div className={styles.card}>{cardState}</div>
            <div className={styles.name}>{"NAME"}</div>
          </div>
        </div>
      </div>
      {alertName && <Alert alertMessage={alertName} closeAlert={closeAlert} />}
    </>
  );
}
