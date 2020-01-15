import * as React from 'react';

export namespace Footer {
  export interface Props {
    toggleForm: () => void,
    onLoad: (data: any) => void,
    filterTodo: (status: string) => void,
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

  handleFilter = (status: string = '') => {
    this.props.filterTodo(status);
    // this.props.onLoad(result);
  }

  render() {
    return (
      <footer className="page-footer">
        <ul className="filter-list d-flex">
          <li className="filter-item active" onClick={() => this.handleFilter()}>
            <i className="icon fas fa-list-ul bold d-block"></i>All
          </li>
          <li className="filter-item" onClick={() => this.handleFilter('active')}>
            <i className="icon fas fa-clipboard-list d-block"></i>Active
          </li>
          <li className="filter-item filter-item-custom">
            <div className="filter-action d-inline-block">
            <i className="icon-add"><i className="fas fa-plus"></i></i>
            </div>
          </li>
          <li className="filter-item" onClick={() => this.handleFilter('completed')}>
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
