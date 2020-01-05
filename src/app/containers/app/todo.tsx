import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { omit } from 'app/utils';
import { Header, Footer, Alert } from 'app/components';
import { AlertActions } from 'app/components/shared/alert/alert.actions';
import { CharacterActions } from 'app/components/features/todo/character.actions';
import { TodoForm } from 'app/components/features/todo/todo-form';
import { TodoList } from 'app/components/features/todo/todo-list';

export namespace App {
  // Character container property definitions
  export interface Props extends RouteComponentProps<void> {
    pageData: RootState.PageState; // Main data of page
    notification: RootState.NotificationState; // data for notification
    actions: CharacterActions; // Character actions
    alertActions: AlertActions; // Notification actions
  }
}

/**
 * This decorator help component can communicate with Redux
 */
@connect(
  (state: any): Pick<App.Props, any> => {
    return { pageData: state.pageData, notification: state.notification };
  },
  (dispatch: Dispatch): Pick<App.Props, any> => ({
    actions: bindActionCreators(omit(CharacterActions, 'Type'), dispatch),
    alertActions: bindActionCreators(omit(AlertActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {
  constructor(props: App.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { pageData, actions, alertActions, notification } = this.props;
    return (
      <div className="page-wrap page-todo">
        <Header />
        <Alert notification={notification} alerter={alertActions} />
        <main className="page-main">
          <div className="container">
            <TodoForm onSave={actions.newCharacter} alerter={alertActions} />
            <TodoList
              data={pageData}
              onLoad={actions.listCharacter}
              onDelete={actions.deleteCharacter}
              onUpdate={actions.updateCharacter}
              alerter={alertActions}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
