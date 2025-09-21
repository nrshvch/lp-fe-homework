import { type Reducer } from "react";
import type { OnThisDayDataState } from "./state";
import type { OnThisDayDataAction } from "./actions";

export const reducer: Reducer<OnThisDayDataState, OnThisDayDataAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        onThisDay: {
          ...state.onThisDay,
          [action.payload.isoDay]: {
            ...action.payload.data,
            births: action.payload.data.births.map((item) => ({
              ...item,
              //NOTE: adds unique-ish (later used for react key)
              id: `${item.year}-${action.payload.isoDay}-${item.text.slice(
                0,
                20
              )}`,
            })),
          },
        },
      };
    default:
      return state;
  }
};
