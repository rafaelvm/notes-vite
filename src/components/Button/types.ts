import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "outlined" | "flat";
  size?: "small" | "medium" | "large";
  labelDescription?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
