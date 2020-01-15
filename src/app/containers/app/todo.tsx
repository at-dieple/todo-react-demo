import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from 'app/reducers';
import { omit } from 'app/utils';
import { Header, Footer } from 'app/components';
import { TodoActions } from 'app/components/features/todo/todo.actions';
import { FooterActions} from 'app/components/layout/footer/footer.actions';
import { TodoForm } from 'app/components/features/todo/todo-form';
import { TodoList } from 'app/components/features/todo/todo-list';

export namespace App {
  // Todo container property definitions
  export interface Props extends RouteComponentProps<void> {
    pageData: RootState.PageState; // Main data of page
    notification: RootState.NotificationState; // data for notification
    actions: TodoActions; // Todo actions
    openForm: RootState.OpenTodoFormState; // state for opening add form
    actionsOpenForm: FooterActions;
  }
  export interface State {
    showForm: boolean,
    data: any,
    filterStatus: string
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
    actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch),
    actionsOpenForm: bindActionCreators(omit(FooterActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props, App.State> {
  constructor(props: App.Props) {
    super(props);
    this.state = {
      showForm: false,
      data: [],
      filterStatus: 'all'
    }
  }

  componentDidMount = () => {
    console.log('Did Mount');
    this.fetchData();
  }

  componentDidUpdate = (nextProps: any) => {
    const { pageData } = this.props;
    console.log('Did Update', nextProps);
    if (nextProps.pageData.length !== pageData.length) {
      // this.setState({data: this.props.pageData});
      this.filterTodo(this.state.filterStatus);
    }
  }

  fetchData = () => {
    const data = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.props.actions.listTodo(data);
    this.setState({data: data});
  };

  toggleForm = () => {
    let isShowed = this.state.showForm;
    this.setState({showForm: isShowed ? false : true });
  }

  filterTodo = (status: string = '') => {
    const { pageData } = this.props;
    let result: any = [];
    switch (status) {
      case 'active':
        result = pageData.filter((item: any) => !item.completed);
        break;
      case 'completed':
        result = pageData.filter((item: any) => item.completed);
        break;
      default:
        result = pageData.map((item: any) => item);
    }
    this.setState({filterStatus: status});
    this.setState({data: result});
  }

  checkStatusChange() {

  }

  render() {
    console.log('todo render');
    const { pageData, actions } = this.props;
    const { showForm, data } = this.state;
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
              data={data}
              onLoad={actions.listTodo}
              onDelete={actions.deleteTodo}
              onUpdate={actions.updateTodo}
            />
          </div>
        </main>
        <Footer toggleForm={this.toggleForm}
                data={pageData}
                onLoad={actions.listTodo}
                filterTodo={this.filterTodo}/>
      </div>
    );
  }
}
