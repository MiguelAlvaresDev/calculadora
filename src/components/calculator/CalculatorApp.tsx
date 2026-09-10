"use client";

import { CalculatorProvider } from "@/context/CalculatorContext";

import { Calculator } from "./Calculator";
import { OperationHistory } from "./OperationHistory";

export function CalculatorApp() {
  return (
    <CalculatorProvider>
      <main
        className="
          flex
          flex-col
          items-center
          gap-2
          px-4
          py-28
          sm:flex-row
          sm:items-stretch
          sm:px-10
        "
      >
        <Calculator />

        <OperationHistory />
      </main>
    </CalculatorProvider>
  );
}