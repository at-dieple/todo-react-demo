import * as React from 'react';
// import { Link } from 'react-router';

export namespace Header {
  export interface Props {
    //
  }
}

export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <header className="page-header">
        <div className="container">
          <div className="header-top">
            <div className="heading text-centerd ">
              <h1>TODO</h1>
            </div>
          </div>
          <ul className="filter-list d-flex">
            <li className="filter-item">
              <div className="filter-number">3</div>All
            </li>
            <li className="filter-item">
              <div className="filter-number">2</div>Active
            </li>
            <li className="filter-item">
              <div className="filter-number">1</div>Completed
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
