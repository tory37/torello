import { useState } from "react";
import { createContainer } from "unstated-next";

export const useStore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close
  };
};

export const StoreContainer = createContainer(useStore);
