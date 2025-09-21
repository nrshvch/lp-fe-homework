import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./context";
import "./style.css";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const open = (content: ReactNode) => setModalContent(content);
  const close = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalContent &&
        createPortal(
          <div className="ModalContainer">{modalContent}</div>,
          document.body
        )}
    </ModalContext.Provider>
  );
};
