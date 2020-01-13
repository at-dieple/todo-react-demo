import * as React from 'react';
import { TodoItem } from './todo-item';
import { CharacterModel } from 'app/models/character.model';

export namespace TodoList {
  // Todo List property definitions
  export interface Props {
    onLoad: (data: any) => void; // action fetch data
    onUpdate: (character: CharacterModel) => void; // action update todo
    onDelete: (id: number) => void; // action delete todo
    data: any; // todo list
  }

  // Todo List state definitions
  export interface State {
    selectedItem: number | undefined;
    data: any ;// to check a specific item is selected, it help control a confirm dialog
  }
}

export class TodoList extends React.Component<TodoList.Props, TodoList.State> {
  constructor(props: TodoList.Props, state: TodoList.State) {
    super(props);
    // initial state of this component
  }

  componentDidMount() {
    this.fetchData();
  }

  /**
   * Fetch Data
   */
  fetchData = () => {
    const data = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.props.onLoad(data);
    this.setState({data: data});
  };

  /**
   * update state of component when click on a specific todo item
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
    const { onDelete, onUpdate, data } = this.props;
    return (
      <div className="todo-list-section">
        <h3 className="left mb-4">Your task</h3>
        {data && data.length ? (
          data.map((item: any, i: number) => (
            <TodoItem
              key={item.id}
              order={i + 1}
              task={item}
              updateTodo={onUpdate}
              deleteTodo={onDelete}
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
