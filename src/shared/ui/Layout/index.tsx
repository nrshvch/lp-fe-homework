import clsx from "clsx";
import "./style.css";
import { Container } from "../Container";

export function Layout({
  header,
  children,
  ...props
}: {
  header?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx("Layout", props.className)}>
      <div className="Layout-header">{header}</div>
      <Container className="Layout-content">{children}</Container>
    </div>
  );
}
