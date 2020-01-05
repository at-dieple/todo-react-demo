import * as React from 'react';

export namespace Footer {
  export interface Props {
    //
  }
}

export class Footer extends React.Component<Footer.Props> {
  render() {
    return (
      <div className="page-footer">
        <ul className="todos-footer-filter">
          <li className="filter-item">
            <i className="icon-all"></i>
            <span className="filter-text">All Tasks</span>
          </li>
          <li className="filter-item">
            <i className="icon-planning"></i>
            <span className="filter-text">Active</span>
          </li>
          <li className="filter-item">
            <i className="icon-completed"></i>
            <span className="filter-text">Completed</span>
          </li>
          <li className="filter-item">
            <i className="icon-remove"></i>
            <span className="filter-text">Clear completed</span>
          </li>
          <li className="slide"></li>
        </ul>
      </div>
    );
  }
}
