"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type CalculatorContextData = {
  history: string[];
  updateHistory: (
    operation: string,
    result: string,
  ) => void;
};

const CalculatorContext =
  createContext<CalculatorContextData | null>(null);

const historyStorageKey = "history";

type CalculatorProviderProps = {
  children: ReactNode;
};

export function CalculatorProvider({
  children,
}: CalculatorProviderProps) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem(
      historyStorageKey,
    );

    if (!savedHistory) {
      return;
    }

    try {
      const parsedHistory = JSON.parse(savedHistory);

      if (Array.isArray(parsedHistory)) {
        setHistory(parsedHistory);
      }
    } catch {
      localStorage.removeItem(historyStorageKey);
    }
  }, []);

  function updateHistory(
    operation: string,
    result: string,
  ) {
    setHistory((previousHistory) => {
      const updatedHistory = [
        ...previousHistory,
        `${operation} = ${result}`,
      ];

      localStorage.setItem(
        historyStorageKey,
        JSON.stringify(updatedHistory),
      );

      return updatedHistory;
    });
  }

  return (
    <CalculatorContext.Provider
      value={{
        history,
        updateHistory,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error(
      "useCalculator deve ser usado dentro de CalculatorProvider",
    );
  }

  return context;
}