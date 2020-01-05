import * as React from 'react';
// import { TodoItem } from './todo-item';
// import { API } from 'app/utils/api';
import { CharacterModel } from 'app/models/character.model';
// import { TodoForm } from './todo-form';

export namespace TodoList {
  // Character List property definitions
  export interface Props {
    onLoad: (data: any) => void; // action fetch data
    onUpdate: (character: CharacterModel) => void; // action update character
    onDelete: (id: number) => void; // action delete character
    alerter: any; // alert object
    data: any; // character list
  }

  // Character List state definitions
  export interface State {
    isLoading?: boolean; // to check the data list is updating, it helps handle UI/UX
    canLoadmore: boolean; // to check and control button load more on UI
    selectedItem: number | undefined; // to check a specific item is selected, it help control a confirm dialog
  }
}

export class TodoList extends React.Component<TodoList.Props, TodoList.State> {
  constructor(props: TodoList.Props, state: TodoList.State) {
    super(props, state);
    // initial state of this component
    this.state = {
      canLoadmore: true,
      selectedItem: undefined
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  /**
   * fetching data when click to load more button
   */
  loadMore = () => {
    this.setState({
      isLoading: true
    });
    this.fetchData();
  };

  /**
   * Fetch Data
   * Call api to fetch character list
   * Note: We can use redux-thunk to make async action instead of this function
   */
  fetchData = () => {
    // fetch n records from offset
    // API.get(`/characters?offset=${this.props.data.length}`)
    //   .then((res: any) => {
    //     // call action indexCharacter throught property onLoad to update state of character list
    //     this.props.onLoad(res.data.characters);
    //     // check and update state for Loadmore button
    //     this.setState({
    //       canLoadmore: res.data.loadMore,
    //       isLoading: false
    //     });
    //   })
    //   .catch((err: any) => {
    //     // display error message if can not character list
    //     this.props.alerter.show({
    //       type: 'danger',
    //       msg: 'データ接続が失敗しました。後でもう一度やり直してください。',
    //       timeout: 10000
    //     });
    //     this.setState({
    //       isLoading: false
    //     });
    //   });
  };

  /**
   * update state of component when click on a specific character item
   */
  onSelect = (id: number) => {
    this.setState({
      selectedItem: id
    });
  };

  handleChange = (event: any) => {
    console.log('handleChange', event.target);
  }

  render() {
    // const { onDelete, onUpdate, data, alerter } = this.props;
    // const { selectedItem, canLoadmore } = this.state;
    return (
      <div className="todo-list-section">
        {/* <div>
          <div className="no-task">
            <img className="img-covered" src="./assets/img/no-task.png" alt="No task" />
            <h3 className="font-bold">No tasks</h3>
            <h5>You have no task</h5>
          </div>
        </div> */}
        <div className="todo-item task-complete">
          <div className="task">
            <input type="checkbox"
              className="hidden-box"
              id="1"
              checked
              onChange={this.handleChange}
            />
            <label htmlFor="1" className="check-label">
              <span className="check-label-box"></span>
              <span className="check-label-text">
                Task 1
              </span>
            </label>
          </div>
          <div className="delete-icon"><i className="icon-trash">X</i></div>
        </div>
        <div className="todo-item">
          <div className="task">
            <input type="checkbox"
              className="hidden-box"
              id="2"
              onChange={this.handleChange}
            />
            <label htmlFor="2" className="check-label">
              <span className="check-label-box"></span>
              <span className="check-label-text">
                Task 1
              </span>
            </label>
          </div>
          <div className="delete-icon"><i className="icon-trash">X</i></div>
        </div>
        <div className="todo-item task-complete">
          <div className="task">
            <input type="checkbox"
              className="hidden-box"
              id="3"
              checked
              onChange={this.handleChange}
            />
            <label htmlFor="3" className="check-label">
              <span className="check-label-box"></span>
              <span className="check-label-text">
                Task 1
              </span>
            </label>
          </div>
          <div className="delete-icon"><i className="icon-trash">X</i></div>
        </div>
      </div>
    );
  }
}
