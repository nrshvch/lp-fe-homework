import { describe, it, expect, vi, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  afterEach(() => {
    cleanup();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Button>Snapshot</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn.classList.contains("Button_disabled")).toBe(true);
  });

  it("fires onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test Click</Button>);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
