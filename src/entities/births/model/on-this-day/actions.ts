import type { OnThisDayResponseType } from "shared/api/on-this-day";

export type OnThisDayDataAction = {
  type: "SET";
  payload: { isoDay: string; data: OnThisDayResponseType };
};

export function setOnThisDay(isoDay: string, data: OnThisDayResponseType) {
  return {
    type: "SET" as const,
    payload: { isoDay, data },
  };
}
