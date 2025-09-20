import clsx from "clsx";
import "./style.css";
import type { ReactNode } from "react";

export type DialogProps = {
  title: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Dialog({ className, title, children, ...props }: DialogProps) {
  return (
    <div {...props} className={clsx("Dialog", className)}>
      {title && (
        <div className="Dialog-title">
          <div>{title}</div>
        </div>
      )}
      <div className="Dialog-inner">{children}</div>
    </div>
  );
}
