import { Wrapper, Header} from "../layout";
import React, { useContext } from "react";
import type { AppProps } from "next/app";
import { operators } from "@/interfaces/Operators";
import { Globalstyle } from '@/styles/globals';

export const OperatorsContext = React.createContext(operators);
export const useGlobalContext = () => useContext(OperatorsContext);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
	<Globalstyle/>
      <Wrapper>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}
