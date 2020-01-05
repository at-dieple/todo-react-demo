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
        <div className="container flex-between">
          <div className="header-left">
            <h3>Hello !</h3>
            {/* <h5>You have {{activeTodo}} <span v-text="activeTodo > 1 ? 'tasks' : 'task'"></span> left</h5> */}
          </div>
          {/* <div className="header-center">
          </div>
          <div className="header-right">
            <a onClick="signoutButtonPressed">Logout</a>
          </div> */}
        </div>
      </header>
    );
  }
}
