import { useAsyncFn } from "react-use";
import { Button, Loading, useOnThisDayData, type ButtonProps } from "shared/ui";

export function StartButton({
  isoDay,
  ...props
}: { isoDay: string } & Omit<ButtonProps, "lg" | "primary" | "onClick">) {
  const { fetch } = useOnThisDayData();

  const [{ loading }, handleClick] = useAsyncFn(() => fetch(isoDay), [fetch]);

  return (
    <Button lg primary onClick={handleClick} disabled={loading} {...props}>
      {loading ? <Loading /> : "Start"}
    </Button>
  );
}
