"use client";

import { Card } from "@/ui/Card";
import { Text } from "@/ui/Text";
import { useCalculator } from "@/context/CalculatorContext";

export function OperationHistory() {
  const { history } = useCalculator();

  return (
    <Card className="w-full px-8 py-10">
      <Text
        as="h1"
        variant="heading"
        className="mb-4"
      >
        Histórico de Operações
      </Text>

      {history.length === 0 ? (
        <Text
          as="p"
          variant="muted"
        >
          Nenhuma operação realizada.
        </Text>
      ) : (
        <ul className="flex flex-col gap-3">
          {history.map((value, index) => (
            <Text
              key={`item-${index}`}
              as="li"
            >
              {value}
            </Text>
          ))}
        </ul>
      )}
    </Card>
  );
}