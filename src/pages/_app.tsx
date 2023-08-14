import { Wrapper, Header, HomeOperators } from "../layout";
import "../styles/globals.css";
import React, { useContext } from "react";
import type { AppProps } from "next/app";
import { operators } from "@/interfaces/Operators";
export const OperatorsContext = React.createContext(operators);
export const useGlobalContext = () => useContext(OperatorsContext);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrapper>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}
