import clsx from "clsx";
import "./style.css";
import { type HTMLAttributes } from "react";

export function Pagination({
  page,
  totalPages,
  onNext,
  onPrev,
  className,
  ...props
}: {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx("Pagination", className)}>
      <div
        className={clsx("Pagination-prev", {
          ["Pagination_disabled"]: page <= 1,
        })}
        onClick={onPrev}
      >
        <span>Prev</span>
      </div>
      <span>
        {page} / {totalPages}
      </span>
      <div
        className={clsx("Pagination-next", {
          ["Pagination_disabled"]: page >= totalPages,
        })}
        onClick={onNext}
      >
        <span>Next</span>
      </div>
    </div>
  );
}
