import { describe, it, expect } from "vitest";
import { setOnThisDay } from "./actions";
import type { OnThisDayResponseType } from "shared/api/on-this-day";

describe("setOnThisDay action creator", () => {
  it("should create SET action with correct payload", () => {
    const isoDay = "09-20";
    const data: OnThisDayResponseType = {
      births: [{ text: "A", year: 1900 }],
    };

    const action = setOnThisDay(isoDay, data);

    expect(action).toEqual({
      type: "SET",
      payload: { isoDay, data },
    });
  });
});
