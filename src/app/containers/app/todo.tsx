import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { omit } from 'app/utils';
import { Header, Footer } from 'app/components';
import { CharacterActions } from 'app/components/features/todo/character.actions';
import { FooterActions} from 'app/components/layout/footer/footer.actions';
import { TodoForm } from 'app/components/features/todo/todo-form';
import { TodoList } from 'app/components/features/todo/todo-list';

export namespace App {
  // Character container property definitions
  export interface Props extends RouteComponentProps<void> {
    pageData: RootState.PageState; // Main data of page
    notification: RootState.NotificationState; // data for notification
    actions: CharacterActions; // Todo actions
    openForm: RootState.OpenTodoFormState; // state for opening add form
    actionsOpenForm: FooterActions;
  }
  export interface State {
    showForm: boolean
  }
}

/**
 * This decorator help component can communicate with Redux
 */
@connect(
  (state: any): Pick<App.Props, any> => {
    return { pageData: state.pageData, openForm: state.openForm};
  },
  (dispatch: Dispatch): Pick<App.Props, any> => ({
    actions: bindActionCreators(omit(CharacterActions, 'Type'), dispatch),
    actionsOpenForm: bindActionCreators(omit(FooterActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props, App.State> {
  constructor(props: App.Props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  toggleForm = () => {
    let isShowed = this.state.showForm;
    this.setState({showForm: isShowed ? false : true })
  }

  render() {
    const { pageData, actions } = this.props;
    const { showForm } = this.state;
    return (
      <div className="page-wrap page-todo">
        <Header data={pageData} />
        <main className="page-main">
          <div className="container">
            <TodoForm onSave={actions.newTodo}
                      showForm={showForm}
                      toggleForm={this.toggleForm}
            />
            <TodoList
              data={pageData}
              onLoad={actions.listTodo}
              onDelete={actions.deleteTodo}
              onUpdate={actions.updateTodo}
            />
          </div>
        </main>
        <Footer toggleForm={this.toggleForm}
                data={pageData}
                onLoad={actions.listTodo}/>
      </div>
    );
  }
}
