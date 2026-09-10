import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const buttonVariants = {
  default: "bg-[var(--background)]",
  primary: "bg-[var(--primary)]",
  equal: "bg-[#7F45E2]",
};

export type ButtonVariant =
  keyof typeof buttonVariants;

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    children: ReactNode;
  };

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        button-gradient
        flex
        cursor-pointer
        items-center
        justify-center
        rounded-xl
        p-3
        text-2xl
        text-[var(--text)]
        shadow-[var(--shadow)]
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}