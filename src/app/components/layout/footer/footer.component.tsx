import * as React from 'react';

export namespace Footer {
  export interface Props {
    toggleForm: () => void,
    onLoad: (data: any) => void,
    data: any
  }
}

export class Footer extends React.Component<Footer.Props> {

  constructor(props: Footer.Props, state?: any) {
    super(props, state)
  }

  openAddForm = () => {
    this.props.toggleForm();
  }

  filterTodo = (status: string = '') => {
    const { data } = this.props;
    console.log(data, status);
    let result: any = [];
    switch (status) {
      case 'active':
        result = data.filter((item: any) => !item.completed);
        break;
      case 'completed':
        result = data.filter((item: any) => item.completed);
        break;
      default:
        result = data.map((item: any) => item);
    }
    console.log('---------',result);
    this.props.onLoad(result);
  }

  render() {
    return (
      <footer className="page-footer">
        <ul className="filter-list d-flex">
          <li className="filter-item active" onClick={() => this.filterTodo()}>
            <i className="icon fas fa-list-ul bold d-block"></i>All
          </li>
          <li className="filter-item" onClick={() => this.filterTodo('active')}>
            <i className="icon fas fa-clipboard-list d-block"></i>Active
          </li>
          <li className="filter-item filter-item-custom">
            <div className="filter-action d-inline-block">
            <i className="icon-add"><i className="fas fa-plus"></i></i>
            </div>
          </li>
          <li className="filter-item" onClick={() => this.filterTodo('completed')}>
            <i className="icon fas fa-clipboard-check bold d-block"></i>Completed
          </li>
          <li className="filter-item">
            <i className="icon fas fa-clipboard bold d-block"></i>Clear
          </li>
        </ul>
        <div className="filter-action d-inline-block" onClick={this.openAddForm}>
          <i className="icon-add fas fa-plus"></i>
        </div>
      </footer>
    );
  }
}
