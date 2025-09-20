import clsx from "clsx";
import "./style.css";

export function Container({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx("Container", props.className)} />;
}
