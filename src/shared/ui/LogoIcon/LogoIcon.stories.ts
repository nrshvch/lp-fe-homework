import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoIcon } from ".";

const meta = {
  title: "LogoIcon",
  component: LogoIcon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LogoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    style: { fontSize: "96px" },
  },
};

export const Medium: Story = {
  args: {
    style: { fontSize: "64px" },
  },
};

export const Small: Story = {
  args: {
    style: { fontSize: "32px" },
  },
};
