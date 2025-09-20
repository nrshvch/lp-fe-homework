import clsx from "clsx";
import "./style.css";
import { useEffect, useRef } from "react";

export function Loading({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      div.current!.innerText =
        "Loading" + ".".repeat((div.current!.innerText.length - 6) % 4);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div {...props} className={clsx("Loading", className)}>
      <span>Loading...</span>
      <div ref={div}>Loading</div>
    </div>
  );
}
