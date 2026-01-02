import { createContext, useContext, useState } from "react";

export type ModalType = "RESPONSIVE" | "CALCULATE" | "VIDEOGAME" | "VIDEOLAUNGE" | "VIDEOTRAILERGAME" | null;

const ModalContext = createContext<{
  modal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
} | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalProvider = ({ children } : any) => {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal: (type) => setModal(type),
        closeModal: () => setModal(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal должен использоваться внутри ModalProvider");
  return context;
};
