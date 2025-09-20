import clsx from "clsx";
import { useCallback } from "react";
import "./style.css";

export type SortingValues = "asc" | "desc";

export type SortingHeadingProps = {
  name: string;
  value?: SortingValues;
  onChange?: (value: SortingValues) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">;

export function SortingHeading({
  name,
  value = "asc",
  onChange,
  ...props
}: SortingHeadingProps) {
  const handleClick = useCallback(() => {
    const newValue = value === "asc" ? "desc" : "asc";
    onChange?.(newValue);
  }, [value, onChange]);

  return (
    <span
      {...props}
      className={clsx(
        "SortingHeading",
        {
          ["SortingHeading-asc"]: value === "asc",
        },
        props.className
      )}
      onClick={handleClick}
    >
      <span>{name}</span>
    </span>
  );
}
