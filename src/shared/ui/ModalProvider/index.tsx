import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./context";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const open = (content: ReactNode) => setModalContent(content);
  const close = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalContent &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            {modalContent}
          </div>,
          document.body
        )}
    </ModalContext.Provider>
  );
};
