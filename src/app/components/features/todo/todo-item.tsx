import * as React from 'react';
import { TodoModel } from 'app/models/todo.model';
// import { ConfirmDialog } from '../../shared/dialog/dialog.component';

export namespace TodoItem {
  // Character Item property definitions
  export interface Props {
    updateTodo: (character: TodoModel) => void; //
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
   * Delete todo
   */
  onDelete() {
    this.props.deleteTodo(this.props.task.id);
  }

  /**
   * Update todo
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
