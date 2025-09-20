import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Container } from "shared/ui";
import { LogoIcon } from "shared/ui";
import "./style.css";

export function Header({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Container {...props} className={clsx("Header", className)}>
      <LogoIcon className="Header-logo" />
    </Container>
  );
}
