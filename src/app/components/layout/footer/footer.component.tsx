import * as React from 'react';

export namespace Footer {
  export interface Props {
    toggleForm: () => void,
    onLoad: (data: any) => void,
    filterTodo: (status: string) => void,
    data: any
  }

  export interface State {
    filterStatus: string
  }

}

export class Footer extends React.Component<Footer.Props, Footer.State> {

  constructor(props: Footer.Props, state?: any) {
    super(props, state);
    this.state = {
      filterStatus: 'all'
    }
  }

  openAddForm = () => {
    this.props.toggleForm();
  }

  handleFilter = (status: string = '') => {
    this.setState({filterStatus: status});
    this.props.filterTodo(status);
    // this.props.onLoad(result);
  }

  render() {
    const { filterStatus } = this.state;
    return (
      <footer className="page-footer">
        <ul className="filter-list d-flex">
          <li className={`filter-item ${filterStatus === 'all' ? 'active' : ''}`} onClick={() => this.handleFilter('all')}>
            <i className="icon fas fa-list-ul bold d-block"></i>All
          </li>
          <li className={`filter-item ${filterStatus === 'active' ? 'active' : ''}`} onClick={() => this.handleFilter('active')}>
            <i className="icon fas fa-clipboard-list d-block"></i>Active
          </li>
          <li className="filter-item filter-item-custom">
            <div className="filter-action d-inline-block">
            <i className="icon-add"><i className="fas fa-plus"></i></i>
            </div>
          </li>
          <li className={`filter-item ${filterStatus === 'completed' ? 'active' : ''}`} onClick={() => this.handleFilter('completed')}>
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
