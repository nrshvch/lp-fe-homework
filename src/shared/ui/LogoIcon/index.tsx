import clsx from "clsx";
import "./style.css";

export function LogoIcon({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx("LogoIcon", className)}>
      <div className="LogoIcon-text">
        On
        <br />
        This
        <br />
        Day.
      </div>
    </div>
  );
}
