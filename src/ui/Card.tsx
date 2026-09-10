import type {
  HTMLAttributes,
  ReactNode,
} from "react";

type CardProps =
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };

export function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        bg-[var(--background)]
        shadow-[var(--shadow)]
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}