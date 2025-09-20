import { useReducer, type ReactNode } from "react";
import { reducer } from "shared/model/on-this-day/reducer";
import { initialState } from "shared/model/on-this-day/state";
import { OnThisDayDataContext } from "./context";

export const OnThisDayDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OnThisDayDataContext.Provider value={[state, dispatch]}>
      {children}
    </OnThisDayDataContext.Provider>
  );
};
