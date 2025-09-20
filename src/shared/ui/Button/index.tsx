import clsx from "clsx";
import "./style.css";

export type ButtonProps = {
  lg?: boolean;
  primary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ lg, primary, className, ...props }: ButtonProps) {
  const size = lg ? "lg" : "md";
  const variant = primary ? "primary" : "default";

  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "Button",
        {
          ["Button_primary"]: variant === "primary",
          ["Button_default"]: variant === "default",
          ["Button_lg"]: size === "lg",
          ["Button_md"]: size === "md",
          ["Button_disabled"]: props.disabled,
        },
        className
      )}
    />
  );
}
