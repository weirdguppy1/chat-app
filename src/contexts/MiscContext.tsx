import { createContext, useContext, useState } from "react";

export interface MiscContextInterface {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultMiscContext: MiscContextInterface = {
  modalOpen: false,
  setModalOpen: () => null,
};

type Props = {
  children: React.ReactNode;
};

const MiscContext = createContext<MiscContextInterface>(defaultMiscContext);

export function useMisc() {
  return useContext(MiscContext);
}
export const MiscProvider = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const miscExports = {
    modalOpen,
    setModalOpen,
  };

  return (
    <MiscContext.Provider value={miscExports}>
      {props.children}
    </MiscContext.Provider>
  );
};
