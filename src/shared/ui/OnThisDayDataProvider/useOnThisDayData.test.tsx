import { act, renderHook } from "@testing-library/react";
import { setOnThisDay } from "shared/model/on-this-day/actions";
import { describe, expect, it, vi, afterEach } from "vitest";
import { OnThisDayDataContext } from "./context";
import { useOnThisDayData } from "./useOnThisDayData";

vi.mock("shared/api/on-this-day", () => ({
  fetchOnThisDay: vi.fn(),
}));

const open = vi.fn();
const close = vi.fn();

vi.mock("../ModalProvider/context", () => ({
  useModal: () => ({ open, close }),
}));

describe("useOnThisDayData", async () => {
  const { fetchOnThisDay } = await import("shared/api/on-this-day");

  const dispatch = vi.fn();
  const state = { onThisDay: {} };

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <OnThisDayDataContext.Provider value={[state, dispatch]}>
      {children}
    </OnThisDayDataContext.Provider>
  );

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("fetches and fires SET action", async () => {
    vi.mocked(fetchOnThisDay).mockResolvedValue({
      births: [],
    });

    const { result } = renderHook(() => useOnThisDayData(), { wrapper });

    await act(() => result.current.fetch("2025-09-20"));

    expect(fetchOnThisDay).toHaveBeenCalledWith("09", "20");
    expect(dispatch).toHaveBeenCalledWith(
      setOnThisDay("2025-09-20", {
        births: [],
      })
    );
    expect(open).not.toHaveBeenCalled();
  });

  it("shows modal on fetch error", async () => {
    vi.mocked(fetchOnThisDay).mockRejectedValue(new Error("API fail"));

    const { result } = renderHook(() => useOnThisDayData(), { wrapper });

    await act(() => result.current.fetch("2025-09-20"));

    expect(open).toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
  });
});
