import * as React from 'react';
import { TodoItem } from './todo-item';
import { CharacterModel } from 'app/models/character.model';

export namespace TodoList {
  // Character List property definitions
  export interface Props {
    onLoad: (data: any) => void; // action fetch data
    onUpdate: (character: CharacterModel) => void; // action update character
    onDelete: (id: number) => void; // action delete character
    data: any; // character list
  }

  // Character List state definitions
  export interface State {
    isLoading?: boolean; // to check the data list is updating, it helps handle UI/UX
    canLoadmore: boolean; // to check and control button load more on UI
    selectedItem: number | undefined;
    data: any // to check a specific item is selected, it help control a confirm dialog
  }
}

export class TodoList extends React.Component<TodoList.Props, TodoList.State> {
  constructor(props: TodoList.Props, state: TodoList.State) {
    super(props, state);
    // initial state of this component
    this.state = {
      canLoadmore: true,
      selectedItem: undefined,
      data: [
        {
          id: 1,
          text: 'Task 1',
          completed: true
        },
        {
          id: 2,
          text: 'Task 2',
          completed: false
        },
        {
          id: 3,
          text: 'Task 3',
          completed: false
        },
        {
          id: 4,
          text: 'Task 4',
          completed: false
        }
      ]
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
    console.log('fetch');
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
    const { onDelete, onUpdate } = this.props;
    const {data} = this.state;
    console.log(data);
    return (
      <div className="todo-list-section">
        <h3 className="left mb-4">Your task</h3>
        {data && data.length ? (
          data.map((item: any, i: number) => (
            <TodoItem
              key={item.id}
              order={i + 1}
              task={item}
              updateCharacter={onUpdate}
              deleteCharacter={onDelete}
             />
          ))
        ) : (
          <div className="no-task">
            <h3 className="font-bold">No tasks</h3>
          </div>
        )
        }
      </div>
    );
  }
}
