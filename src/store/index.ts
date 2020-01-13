import { useState } from "react";
import { createContainer } from "unstated-next";
import { string } from "prop-types";

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

  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const loggedInActions = {
    setAuthToken,
    clearAuthToken: () => {
      setAuthToken(null);
    },
    startLoadingAuth: () => {
      setIsLoadingAuth(true);
    },
    finishLoadingAuth: () => {
      setIsLoadingAuth(false);
    }
  };
  //#endregion

  return {
    createModal: {
      isOpen: createModalIsOpen,
      ...createModalActions
    },
    auth: {
      authToken,
      isLoadingAuth,
      ...loggedInActions
    }
  };
};

const StoreContainer = createContainer(useStore);

export default StoreContainer;
