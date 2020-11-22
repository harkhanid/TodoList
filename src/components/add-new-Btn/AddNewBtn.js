import React from 'react';
import './AddNewBtn.scss';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  /* below function will be called whenever add button is clicked and 
  it will all addDiv callback function which will render add Item div in DOM. */
  addBtn(evt){
    evt.preventDefault();
    this.props.addDiv(true);
  }

  render(){
    return (
      <div className="addBtn">
          <button onClick={this.addBtn.bind(this)}>Add a new Item</button>
      </div>
    );
  }
}
