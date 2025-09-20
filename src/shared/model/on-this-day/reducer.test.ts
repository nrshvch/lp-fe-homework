import type { OnThisDayResponseType } from "shared/api";
import { describe, expect, it } from "vitest";
import { setOnThisDay } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./state";

describe("onThisDay reducer", () => {
  it("should handle SET action", () => {
    const isoDay = "09-20";
    const data: OnThisDayResponseType = {
      births: [
        { text: "A", year: 1887 },
        { text: "B", year: 1900 },
      ],
    };

    const action = setOnThisDay(isoDay, data);
    const state = reducer(initialState, action);

    expect(state.onThisDay[isoDay]).toBeDefined();
    expect(state.onThisDay[isoDay]?.births.length).toBe(2);
    expect(state.onThisDay[isoDay]?.births[0]).toMatchObject({
      id: "1887-09-20-A",
      text: "A",
      year: 1887,
    });
    expect(state.onThisDay[isoDay]?.births[1]).toMatchObject({
      id: "1900-09-20-B",
      text: "B",
      year: 1900,
    });
  });
});
