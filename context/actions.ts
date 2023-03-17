export enum ActionType {
  setFullPageApi,
  setSrcVideo,
  addIsShown,
  setFunctionShown,
}

export interface setFullPageApi {
  type: ActionType.setFullPageApi;
  payload: any;
}

export interface setSrcVideo {
  type: ActionType.setSrcVideo;
  payload: string;
}

export type ModalActions = setSrcVideo | setFullPageApi;
