"use client"

import { createContext, useState } from "react";

export const ModalContext = createContext({
    isOpen: false,
    closeModal: () => {},
    openModal: () => {}
})

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (  
    <ModalContext.Provider value={{
        isOpen,
        closeModal,
        openModal
    }}>
        {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
