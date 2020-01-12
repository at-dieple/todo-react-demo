import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { omit } from 'app/utils';
import { Header, Footer } from 'app/components';
import { CharacterActions } from 'app/components/features/todo/character.actions';
import { TodoForm } from 'app/components/features/todo/todo-form';
import { TodoList } from 'app/components/features/todo/todo-list';

export namespace App {
  // Character container property definitions
  export interface Props extends RouteComponentProps<void> {
    pageData: RootState.PageState; // Main data of page
    notification: RootState.NotificationState; // data for notification
    actions: CharacterActions; // Character actions
  }
}

/**
 * This decorator help component can communicate with Redux
 */
@connect(
  (state: any): Pick<App.Props, any> => {
    return { pageData: state.pageData};
  },
  (dispatch: Dispatch): Pick<App.Props, any> => ({
    actions: bindActionCreators(omit(CharacterActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {
  constructor(props: App.Props, context?: any) {
    super(props, context);
  }

  render() {
    const { pageData, actions } = this.props;
    return (
      <div className="page-wrap page-todo">
        <Header />
        <main className="page-main">
          <div className="container">
            <TodoForm onSave={actions.newTodo} />
            <TodoList
              data={pageData}
              onLoad={actions.listTodo}
              onDelete={actions.deleteTodo}
              onUpdate={actions.updateTodo}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
