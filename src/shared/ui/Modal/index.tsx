import clsx from "clsx";
import "./style.css";
import type { ReactNode } from "react";
import { Dialog, type DialogProps } from "../Dialog";

export function Modal({
  className,
  actions,
  error,
  children,
  ...props
}: {
  error?: boolean;
  actions: ReactNode;
} & DialogProps) {
  return (
    <Dialog
      {...props}
      className={clsx("Modal", { ["Modal_error"]: error }, className)}
    >
      <div className="Modal-content">{children}</div>
      <div className="Modal-actions">{actions}</div>
    </Dialog>
  );
}
