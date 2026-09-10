import { type ButtonVariant } from "@/ui/Button";

type CalculatorButton = {
  input: string;
  variant?: ButtonVariant;
  className?: string;
};

export const calculatorButtons: CalculatorButton[][] = [
  [
    {
      input: "CE",
    },
    {
      input: "C",
      className: "h-16 flex-1",
    },
    {
      input: "/",
      variant: "primary",
    },
  ],

  [
    {
      input: "7",
    },
    {
      input: "8",
    },
    {
      input: "9",
    },
    {
      input: "*",
      variant: "primary",
    },
  ],

  [
    {
      input: "4",
    },
    {
      input: "5",
    },
    {
      input: "6",
    },
    {
      input: "-",
      variant: "primary",
    },
  ],

  [
    {
      input: "1",
    },
    {
      input: "2",
    },
    {
      input: "3",
    },
    {
      input: "+",
      variant: "primary",
    },
  ],

  [
    {
      input: "0",
      className: "h-16 flex-1",
    },
    {
      input: ",",
    },
    {
      input: "=",
      variant: "equal",
    },
  ],
];