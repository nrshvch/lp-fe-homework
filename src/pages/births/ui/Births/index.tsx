import { toIsoDateString } from "shared/lib/utils";
import { Layout, useOnThisDayData } from "shared/ui";
import { Header } from "shared/ui/Header";
import { BirthsDialog } from "../BirthsDialog";
import { StartButton } from "../StartButton";

export function Births() {
  const { data } = useOnThisDayData();

  const isoDay = toIsoDateString(new Date());
  const births = data[isoDay]?.births;

  return (
    <Layout header={<Header />}>
      {births ? (
        <BirthsDialog isoDay={isoDay} />
      ) : (
        <StartButton isoDay={isoDay} />
      )}
    </Layout>
  );
}
