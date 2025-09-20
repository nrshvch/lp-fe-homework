import { createContext, useContext, type ReactNode } from "react";

export type ModalContext = {
  open: (content: ReactNode) => void;
  close: () => void;
};
export const ModalContext = createContext<ModalContext | undefined>(undefined);

export function useModal() {
  const ctx = useContext(ModalContext);

  if (!ctx) throw new Error("useModal must be used within a ModalProvider");

  return ctx;
}
