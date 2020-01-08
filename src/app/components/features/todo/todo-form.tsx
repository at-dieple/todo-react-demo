import * as React from 'react';
import { CharacterModel } from 'app/models/character.model';
// import { API } from 'app/utils/api';
import { FormValidation } from 'app/utils/form-validation';

export namespace TodoForm {
  // character form property definitions
  export interface Props {
    onSave: (obj: CharacterModel) => void;
  }
  // character form state definitions
  export interface State {
    isProcessing: boolean; // to check the form is submitting or not, it helps handle UI/UX
    form: FormValidation; // form validation
  }
}

export class TodoForm extends React.Component<TodoForm.Props, TodoForm.State> {
  constructor(props: TodoForm.Props) {
    super(props);
    // initial state of this component
    this.state = {
      isProcessing: false,
      form: this.initForm()
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
      name: {
        value: '',
        rules: {
          character: (value: any) => {
            const regexp = /^.{1,10}$/;
            return regexp.test(value);
          },
          required: (value: any) => {
            if (value) {
              return value.trim() !== '';
            } else {
              return false;
            }
          }
        }
      },
      age: {
        value: '',
        rules: {
          age: (value: any) => {
            const regexp = /^\d{1,3}$/;
            return regexp.test(value);
          },
          number: (value: any) => {
            return +value > 0;
          }
        }
      },
      comment: {
        value: ''
      }
    });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.setState({ isProcessing: true });
    this.register(this.state.form.data);
  };

  /**
   * Register new character
   * @param data is a Character object
   * Call api to register a new character
   * Note: We can use redux-thunk to make async action instead of this function
   */
  register = (data: CharacterModel) => {
    // API.post('/characters', data)
    //   .then((res: any) => {
    //     // call action newCharacter throught property onSave to update state of character list
    //     this.props.onSave(res.data);
    //     // display message after register sucessfully
    //     this.props.alerter.show({
    //       type: 'success',
    //       msg: `${res.data.name}を追加しました。`
    //     });
    //     this.resetForm();
    //   })
    //   .catch((err: any) => {
    //     // display error message in case failed to register
    //     this.props.alerter.show({
    //       type: 'danger',
    //       msg: '登録が失敗しました。後でもう一度やり直してください。',
    //       timeout: 10000
    //     });
    //     this.setState({
    //       isProcessing: false
    //     });
    //   });
  };

  resetForm = () => {
    this.setState({
      isProcessing: false,
      form: this.initForm()
    });
  };

  /**
   * Handle event change a specific field
   * @param event is a object
   */
  handleChange = (e: any) => {
    const { name, value } = e.target;
    /**
     * call method field change which is provide by form field validation
     */
    this.state.form.fieldChange(name, value);
  };

  formChange = (e: any) => {
    // update form state
    this.setState({
      form: this.state.form
    });
  };

  render() {
    const {} = this.props;
    return (
      <div className="form-section">
        <form className="form-add-task">
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Add a task..." />
            <button type="submit" className="input-group-addon" onClick={this.formChange}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
