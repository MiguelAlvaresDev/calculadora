"use client";

import { useState } from "react";

import { Button } from "@/ui/Button";
import { Card } from "@/ui/Card";
import { calculatorButtons } from "@/data/calculator-button";
import { useCalculator } from "@/context/CalculatorContext";

import { CalculatorDisplay } from "./CalculatorDisplay";

const operators = ["+", "-", "*", "/"];

export function Calculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const { updateHistory } = useCalculator();

  function handleInputClick(input: string) {
    if (input === "CE") {
    setOperation("");
    setResult("");
   return;
  }

  if (input === "C") {
   setResult("");

    setOperation((currentOperation) =>
    currentOperation.slice(0, -1),
  );

   return;
  }

    if (input === "=") {
      if (!operation) {
        return;
      }

      try {
        const normalizedOperation = operation.replace(
          /,/g,
          ".",
        );

        const operationResult = eval(
          normalizedOperation,
        );

        const parsedResult = operationResult
          .toString()
          .replace(/\./g, ",");

        setResult(parsedResult);

        updateHistory(
          operation,
          parsedResult,
        );
      } catch {
        setResult("Erro");
      }

      return;
    }

    const isOperator = operators.includes(input);

    if (result) {
      const previousResult = result;

      setResult("");

      if (isOperator && previousResult !== "Erro") {
        setOperation(
          `${previousResult}${input}`,
        );
      } else if (input === ",") {
        setOperation("0,");
      } else {
        setOperation(input);
      }

      return;
    }

    if (input === ",") {
      const currentNumber =
        operation.split(/[+\-*/]/).at(-1) ?? "";

      if (currentNumber.includes(",")) {
        return;
      }

      setOperation(
        `${operation}${currentNumber ? "," : "0,"}`,
      );

      return;
    }

    if (isOperator) {
      if (!operation) {
        if (input === "-") {
          setOperation("-");
        }

        return;
      }

      const lastCharacter =
        operation[operation.length - 1];

      if (operators.includes(lastCharacter)) {
        setOperation(
          `${operation.slice(0, -1)}${input}`,
        );

        return;
      }
    }

    setOperation(`${operation}${input}`);
  }

  return (
    <Card className="flex w-[22.35rem] flex-col gap-[1.625rem] px-8 pb-8 pt-14">
      <CalculatorDisplay
        operation={operation}
        result={result}
      />

      <div className="flex flex-col gap-3">
        {calculatorButtons.map(
          (row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex gap-3"
            >
              {row.map((button) => (
                <Button
                  key={button.input}
                  className={
                    button.className ??
                    "h-16 w-16"
                  }
                  variant={button.variant}
                  onClick={() =>
                    handleInputClick(
                      button.input,
                    )
                  }
                >
                  {button.input}
                </Button>
              ))}
            </div>
          ),
        )}
      </div>
    </Card>
  );
}