import Image from "next/image";
import Link from "next/link";
import styles from "./Operator.module.css";
import { P } from "../UI/P/PStyle";

interface IProps {
  name: string;
  image?: string;
}

const stringSize = (str: string) =>
  str.length > 7 ? `${str.slice(0, 7)}...` : str;

export const Operator: React.FC<IProps> = (props) => {
  return (
    <div className={styles.operator}>
      <Link href={`payment/${props.name}`}>
        <div className={styles.operatorcard}>
          <P $l className={styles.name}>
            {stringSize(props.name)}
          </P>
          {props.image ? (
            <div className={styles.imgdiv}>
              <Image
                src={props.image}
                alt={props.name}
                className={styles.svg}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  );
};
