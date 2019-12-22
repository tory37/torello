import { useState } from "react";
import { createContainer } from "unstated-next";

export const useStore = () => {
  //#region Create Modal
  const [createModalIsOpen, setCreateModalIsOpen] = useState<boolean>(false);

  const createModalActions = {
    open: () => {
      setCreateModalIsOpen(true);
    },
    close: () => {
      setCreateModalIsOpen(false);
    }
  };
  //#endregion

  return {
    createModal: {
      isOpen: createModalIsOpen,
      ...createModalActions
    }
  };
};

const StoreContainer = createContainer(useStore);

export default StoreContainer;
