import * as React from 'react';
import { CharacterModel } from 'app/models/character.model';
// import { ConfirmDialog } from '../../shared/dialog/dialog.component';

export namespace TodoItem {
  // Character Item property definitions
  export interface Props {
    updateTodo: (character: CharacterModel) => void; //
    deleteTodo: (id: number) => void; //
    order: number; // to show item order at the first column
    task: any// information of a specific task
  }
  export interface State {
    taskState: any
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
  constructor(props: TodoItem.Props, state: TodoItem.State) {
    super(props);
    this.state = {
      taskState: {}
    }
  }

  componentDidMount = () => {
    // const { task } = this.props.task;
    this.setState({taskState: this.props.task});
  }

  handleDelete = () => {
    this.onDelete();
  };

  handleUpdate = (event: any) => {
    this.onUpdate();
  };

  /**
   * Delete character
   * Call api to delete character
   * Note: We can use redux-thunk to make async action instead of this function
   */
  onDelete() {
    this.props.deleteTodo(this.props.task.id);
  }

  /**
   * Update character
   * Call api to update character
   * Note: We can use redux-thunk to make async action instead of this function
   */
  onUpdate = () => {
    this.props.updateTodo(this.props.task);
  };

  render() {
    const { taskState } = this.state;
    return (
      <div className={`todo-item ${taskState.completed ? 'task-completed' : ''}`}>
        <div className="task">
          <input type="checkbox"
            className="hidden-box"
            id={taskState.id || ''}
            value={taskState.text || ''}
            checked={taskState.completed || false}
            onChange={this.handleUpdate}
            />
          <label htmlFor={taskState.id} className="check-label">
            <span className="check-label-box"></span>
            <span className="check-label-text">
              {taskState.text}
            </span>
          </label>
        </div>
        <div className="delete-icon" onClick={this.handleDelete}><i className="far fa-trash-alt"></i></div>
      </div>
    );
  }
}
