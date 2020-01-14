import * as React from 'react';
// import { Link } from 'react-router';

export namespace Header {
  export interface Props {
    data: any
  }
}

export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
  }

  count = (type: string) => {
    const { data } = this.props;
    let result: number = 0;
    if (type === 'active') {
      data.map((item: any) => {
        result = !item.completed ? result + 1 : result;
      })
    } else {
      data.map((item: any) => {
        result = item.completed ? result + 1 : result;
      })
    }
    return result;
  }

  render() {
    const { data } = this.props;
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
              <div className="filter-number">
                {data ? data.length : '0'}
              </div>
              All
            </li>
            <li className="filter-item">
              <div className="filter-number">
                { this.count('active')}
              </div>
              Active
            </li>
            <li className="filter-item">
              <div className="filter-number">
                { this.count('completed')}
              </div>
              Completed
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
