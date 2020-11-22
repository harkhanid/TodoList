import React from 'react';
import './AddNewItem.scss';

export default class extends React.Component{
  constructor(props){
    super(props);
    // title, description,date and items of states are declared
    this.state={
        "title":"",
        "description":"",
        "date":null,
        "items":[]
    };
  }

  //Below function is called whenever new Todo item is added.
  addItem(event){
      event.preventDefault();
      console.log(this.state);
      /* headers for API is set here. */
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({title:this.state.title,description:this.state.description})
      };
      /* api for sending data is called here */
      fetch('http://localhost:3000/todos/', requestOptions)
        .then(response => response.json())
        .then(data => 
          console.log(data));

      alert('click on refresh to get the updated to-do list');
  }

  /* this function is called whenever title input field is changed */
  changeTitle(event){
    event.preventDefault();
    this.setState({
        title:event.target.value
    });
  }

    /* this function is called whenever date input field is changed */
  changeDate(event){
    event.preventDefault();
    this.setState({
        date:event.target.value
    });
  }
    /* this function is called whenever description input field is changed */
  changeDesc(event){
    event.preventDefault();
    this.setState({
      description:event.target.value
    });
  }

  render(){
    return (
      <div className="add-card">
        <form>
          <label>Title : </label>
          <input type="text" name="title" onChange={this.changeTitle.bind(this)} required />
          <br /><br />
          <label>Description : </label>
          <input type="text" name="desc" onChange={this.changeDesc.bind(this)} />
          <br></br><br></br>
          <button onClick={this.addItem.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
}
