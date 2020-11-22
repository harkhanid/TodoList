import React from 'react';
import './NavBar.scss';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  
  render(){
    return (
      <nav className="nav-bar">
          Todo App
      </nav>
    );
  }
}
