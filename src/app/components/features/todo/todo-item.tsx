import * as React from 'react';
import { CharacterModel } from 'app/models/character.model';
// import { ConfirmDialog } from '../../shared/dialog/dialog.component';

export namespace TodoItem {
  // Character Item property definitions
  export interface Props {
    updateCharacter: (character: CharacterModel) => void; //
    deleteCharacter: (id: number) => void; //
    order: number; // to show item order at the first column
    task: any; // information of a specific task
  }
}

export class TodoItem extends React.Component<TodoItem.Props> {
  constructor(props: TodoItem.Props) {
    super(props);
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
    //
  }

  /**
   * Update character
   * Call api to update character
   * Note: We can use redux-thunk to make async action instead of this function
   */
  onUpdate = () => {
    //
  };

  render() {
    const { task } = this.props;
    return (
      <div className={`todo-item ${task.completed ? 'task-completed' : ''}`}>
        <div className="task">
          <input type="checkbox"
            className="hidden-box"
            id={task.id}
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
