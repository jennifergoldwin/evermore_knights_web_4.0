import React from "react";
import { ModalActions } from "./actions";
import { initialModalState, ModalState } from "./state";
export const ModalContext = React.createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalActions>;
}>({
  state: initialModalState,
  dispatch: () => undefined,
});
