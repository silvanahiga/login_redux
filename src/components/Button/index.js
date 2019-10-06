import React from "react";
import { connect } from "react-redux";
import { resetLoggin } from "../../store";
import "./style.css"


class Button extends React.Component {
  handleClick(e) {
    console.log(e)
    const { dispatch } = this.props;
    dispatch(resetLoggin())
    alert("HASTA PRONTO")
  }
  render() {
    return (
      <React.Fragment>
        <button className="button_unloggin" onClick={(e) => this.handleClick(e)}>DESLOGUEARSE</button>
      </React.Fragment>
    )
  }
}

export default connect()(Button)