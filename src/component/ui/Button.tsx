import cn from "../utils/cn";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

export const ButtonVariant = cva(" disabled:opacity-70", {
  variants: {
    theme: {
      dark: "bg-[#FF553E] text-white",
      light: "bg-white text-text_primary_dark",
      secondary: "bg-bg_secondary text-text_primary_light",
    },
    thickness: {
      thin: "px-1 py-1 rounded-sm lg:px-1.5",
      moderate: "px-2 lg:px-2.5 py-2 rounded",
      thick: "px-10 py-4 rounded-md",
    },
    fontWeight: {
      "400": "font-normal",
      "500": "font-medium",
      "600": "font-semibold",
    },
    rounded: {
      large: "rounded-lg",
      medium: "rounded-md",
      small: "rounded-sm",
    },
    fontSize: {
      sm: "text-sm",
      base: "text-base",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
    family: {
      font: "Anybody",
    },
  },
  defaultVariants: {
    theme: "light",
    thickness: "moderate",
    fontSize: "base",
    fontWeight: "400",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantProps<typeof ButtonVariant>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref = null) => {
    return (
      <button
        className={cn(ButtonVariant(variant), className)}
        ref={ref}
        {...props}
      ></button>
    );
  }
);

export default Button;
