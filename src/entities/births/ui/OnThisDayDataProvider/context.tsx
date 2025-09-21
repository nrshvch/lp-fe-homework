import type {
  OnThisDayDataAction,
  OnThisDayDataState,
} from "entities/births/model";
import { createContext, type Dispatch } from "react";

export const OnThisDayDataContext = createContext<
  | [state: OnThisDayDataState, dispatch: Dispatch<OnThisDayDataAction>]
  | undefined
>(undefined);
