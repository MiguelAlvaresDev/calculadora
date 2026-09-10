import { Text } from "@/ui/Text";

type CalculatorDisplayProps = {
  operation: string;
  result: string;
};

export function CalculatorDisplay({
  operation,
  result,
}: CalculatorDisplayProps) {
  return (
    <div className="flex cursor-default select-none flex-col gap-2 px-[1.375rem]">
      <Text
        variant="muted"
        as="div"
        className="flex h-7 items-center justify-end"
      >
        {result && operation}
      </Text>

      <div className="flex h-9 items-center justify-between">
        <Text variant="muted">
          =
        </Text>

        <Text variant="blast">
          {result || operation || "0"}
        </Text>
      </div>
    </div>
  );
}