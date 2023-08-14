import { useRouter } from "next/router";
import React from "react";
import { operators } from "@/interfaces/Operators";
import { P } from "@/components/UI/P/P";
import { PayCard } from "@/layout";

export default function PayPage() {
  const router = useRouter();
  const { name } = router.query;
  const currOperator = operators.find((op) => op.name === name);
  return (
    <div style={{ margin: "15px" }}>
      <div id="mainScreen" className="screen">
        <h1>{currOperator?.name} payment terminal</h1>
        <P size="l">quick, easy & clearly</P>
      </div>
      <div>
        <PayCard />
      </div>
    </div>
  );
}
