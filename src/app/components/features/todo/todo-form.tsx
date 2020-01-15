import * as React from 'react';
import { TodoModel } from 'app/models/todo.model';
// import { API } from 'app/utils/api';
import { FormValidation } from 'app/utils/form-validation';

export namespace TodoForm {
  // todo form property definitions
  export interface Props {
    onSave: (obj: TodoModel) => void,
    toggleForm: () => void,
    showForm: boolean
  }
  // todo form state definitions
  export interface State {
    form: FormValidation; // form validation
  }
}

export class TodoForm extends React.Component<TodoForm.Props, TodoForm.State> {
  constructor(props: TodoForm.Props) {
    super(props);
    // initial state of this component
    this.state = {
      form: this.initForm(),
    };
  }

  /**
   * Initial Form
   * @output a new form validation is an object
   * Seeing FormValidation definitions for more detail
   */
  initForm = () => {
    /**
     * define fields value and rule to validate
     */
    return new FormValidation({
      task: {
        value: '',
        rules: {
          required: (value: any) => {
            if (value) {
              return value.trim() !== '';
            } else {
              return false;
            }
          }
        }
      }
    });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    let term = {
      id: Math.random(),
      text: this.state.form.data.task,
      completed: false
    };
    this.register(term);
  };

  /**
   * Register new todo
   * @param data is a Todo object
   */
  register = (data: TodoModel) => {
    this.props.onSave(data);
    this.props.toggleForm();
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      form: this.initForm()
    });
  };

  /**
   * Handle event change a specific field
   * @param event is a object
   */
  handleChange = (e: any) => {
    console.log(this.state.form);
    const { name, value } = e.target;
    /**
     * call method field change which is provide by form field validation
     */
    this.state.form.fieldChange(name, value);
  };

  closeForm = (e: any) => {
    this.props.toggleForm();
  }

  render() {
    const { showForm } = this.props;
    return (
      <div className="fade-wrapper">
        {
          showForm ?
          <div className="modal">
            <div className="modal-main">
              <div className="modal-header is-relative">
                <h4 className="txt-center">Create a todo</h4>
                <span className="close pointer" onClick={this.closeForm}><i className="fas fa-times"></i></span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="task"
                  maxLength={30}
                  className="form-input"
                  placeholder="Enter a task!"
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-primary btn-block mt-3" onClick={this.onSubmit}>
                  <i className="icon-add pointer">Save</i>
                </button>
              </div>
            </div>
          </div> : ''
        }
      </div>
    );
  }
}
