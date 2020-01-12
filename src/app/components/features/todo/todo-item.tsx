import * as React from 'react';
import { CharacterModel } from 'app/models/character.model';
// import { ConfirmDialog } from '../../shared/dialog/dialog.component';

export namespace TodoItem {
  // Character Item property definitions
  export interface Props {
    updateTodo: (character: CharacterModel) => void; //
    deleteTodo: (id: number) => void; //
    order: number; // to show item order at the first column
    task: any; // information of a specific task
  }
  export interface State {
    completed: any
  }
}

export class TodoItem extends React.Component<TodoItem.Props> {
  constructor(props: TodoItem.Props, state: TodoItem.State) {
    super(props);
    this.state = {
      completed: false
    }
  }

  componentDidMount = () => {
    const { task } = this.props.task;
    this.setState({completed: task});
  }

  handleDelete = () => {
    this.onDelete();
  };

  handleUpdate = () => {
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
    this.props.updateTodo(this.props.task.id);
  };

  render() {
    const { task } = this.props;
    // const { completed } = this.state;
    return (
      <div className={`todo-item ${task.completed ? 'task-completed' : ''}`}>
        <div className="task">
          <input type="checkbox"
            className="hidden-box"
            id={task.id}
            // checked={completed}
            onChange={this.handleUpdate}
            />
          <label htmlFor={task.id} className="check-label">
            <span className="check-label-box"></span>
            <span className="check-label-text">
              {task.text}
            </span>
          </label>
        </div>
        <div className="delete-icon" onClick={this.handleDelete}><i className="far fa-trash-alt"></i></div>
      </div>
    );
  }
}
