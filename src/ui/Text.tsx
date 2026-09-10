import type {
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

const textVariants = {
  default: "text-xl",
  muted: "text-xl text-[var(--text-secondary)]",
  heading: "text-2xl",
  blast: "text-3xl",
};

type TextVariant = keyof typeof textVariants;

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: TextVariant;
  children: ReactNode;
};

export function Text({
  as: Component = "span",
  variant = "default",
  className = "",
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={`${textVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}