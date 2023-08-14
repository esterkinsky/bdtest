import { P } from "@/components/UI/P/PStyle";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>
            <h1>NamePay</h1>
            <P $s>mobile phone payment terminal</P>
          </div>
        </div>
      </div>
    </>
  );
};
