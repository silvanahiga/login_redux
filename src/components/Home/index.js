import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import Button from "../Button"
import "./style.css"

class Home extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div className="nav">
        <Link className="url" to="/login">Log In</Link>


        <div className="info-wrap">
          <div className="info-card">
            {this.props.logged === true ? (
              <div className="wrap-log">
                <p>{"ACCESO CORRECTO"} <br />{<Button />}</p>
              </div>) : <div className="wrap-log"> <p>{"ACCESO INCORRECTO"}</p></div>
            }

          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    name: state.name,
    email: state.email,
    password: state.password,
    logged: state.logged
  }
}

export default connect(mapStateToProps)(Home);