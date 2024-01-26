import { createContext, useState } from "react";

const ModalContext = createContext({})

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return <></>;
}

export default ModalProvider;
