import {
  ActionType,
  ModalActions,
  setFullPageApi,
  setSrcVideo,
} from "./actions";
import { ModalState } from "./state";

export function modalReducer(
  state: ModalState,
  action: ModalActions
): ModalState {
  switch (action.type) {
    case ActionType.setFullPageApi:
      return { ...state, fullpageApi: action.payload };
    case ActionType.setSrcVideo:
      return { ...state, srcVideo: action.payload };
    default:
      return state;
  }
}

export const addFullPageApi = (fullpageApi: any): setFullPageApi => ({
  type: ActionType.setFullPageApi,
  payload: fullpageApi,
});

export const addSrcVideo = (url: string): setSrcVideo => ({
  type: ActionType.setSrcVideo,
  payload: url,
});
