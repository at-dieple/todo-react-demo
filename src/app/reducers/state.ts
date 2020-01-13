export interface RootState {
  pageData: RootState.PageState;
  notification: RootState.NotificationState;
  openTodoForm: RootState.OpenTodoFormState;
}

export namespace RootState {
  export type PageState = any[];
  export type NotificationState = {};
  export type OpenTodoFormState = false;
}
