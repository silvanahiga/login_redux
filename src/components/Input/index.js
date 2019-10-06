import React from "react";
import { inputChange } from "../../store"
import { connect } from "react-redux";
import "./style.css"



class Input extends React.Component {
  handleChange(e) {
    const name = e.target.name;
    const email = e.target.value;
    const { dispatch } = this.props;
    dispatch(inputChange(email, name))

  }

  render() {
    return (
      <div className="input">
        <input name={this.props.name} onChange={(e) => this.handleChange(e)}></input>
      </div>
    )
  }
}



export default connect()(Input)