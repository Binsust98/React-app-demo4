import React from "react";
// import './styles.css'



class AddContact extends React.Component {
   state = {
    sid: "",
    sname: "",
    address: "",
    coursename: "",
  };

  add = (e) => {
    e.preventDefault()
    if (this.state.sname === "" || this.state.sid === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    
    this.setState({ sid:"", sname: "" ,address: "",coursename: ""});

  };
  render() {
    return (
      <div className="ui main">
        <h2 className="h2"> ADD DETAILS</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>STUDENT ID</label>
            <input
              type="text"
              name="id"
              placeholder="STUDENT ID"
              value={this.state.sid}
              onChange={(e) => this.setState({ sid: e.target.value })}
            />
          </div>

          <div className="field">
            <label>STUDENT NAME</label>
            <input
              type="text"
              name="name"
              placeholder="STUDENT NAME"
              value={this.state.sname}
              onChange={(e) => this.setState({ sname: e.target.value })}
            />
          </div>

          <div className="field">
            <label>ADRESS</label>
            <input
              type="text"
              name="address"
              placeholder="ADDRESS"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>


          <div className="field">
            <label>COURSE NAME</label>
            <input
              type="text"
              name="coursename"
              placeholder="COURSE NAME"
              value={this.state.coursename}
              onChange={(e) => this.setState({ coursename: e.target.value })}
            />
          </div>

          
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;