import { P } from "@/components/UI/P/P";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>
            <h1>NamePay</h1>
            <P size="m">mobile phone payment terminal</P>
          </div>
        </div>
      </div>
    </>
  );
};
