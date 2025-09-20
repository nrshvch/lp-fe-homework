import { createContext, type Dispatch } from "react";
import { type OnThisDayDataAction } from "shared/model/on-this-day/actions";
import { type OnThisDayDataState } from "shared/model/on-this-day/state";

export const OnThisDayDataContext = createContext<
  | [state: OnThisDayDataState, dispatch: Dispatch<OnThisDayDataAction>]
  | undefined
>(undefined);
