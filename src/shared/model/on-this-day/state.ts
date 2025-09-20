import type { OnThisDayResponseType } from "shared/api/on-this-day";

export type OnThisDay = Omit<OnThisDayResponseType, "births"> & {
  births: (OnThisDayResponseType["births"][number] & { id: string })[];
};

export const initialState: OnThisDayDataState = {
  onThisDay: {},
};

export type OnThisDayDataState = {
  onThisDay: {
    [day: string]: OnThisDay | undefined;
  };
};
