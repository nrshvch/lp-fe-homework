import { useReducer, type ReactNode } from "react";
import { OnThisDayDataContext } from "./context";
import { initialState, reducer } from "../../model";

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
