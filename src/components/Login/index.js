import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Input from "../Input";
import { logginCheck } from "../../store";
import "./style.css";
import {kitty} from "../images/kitty-logo.png";


class Login extends React.Component {

  handleChange(e) {
    const email = e.target.email;
    const value = e.target.value
    console.log(email, value)
  }

  handleClick() {
    if (this.props.email === "contacto@courseit.com.ar" && this.props.password === "courseit123") {
      console.log(112)
      const { dispatch } = this.props
      dispatch(logginCheck());
   
    }
  }


  render() {
    console.log(this.props)
    return (
      <div className="nav">
        <Link className="url" to="/">Home</Link>
        
        <div>{this.props.name}</div>
        <div className="wrap">
          <div className="loggin">
          <div className="title_loggin">Accedé a tu cuenta</div>
  
            <Input  name="email" />
            <Input  name="password" />

            <button className="button" onClick={() => this.handleClick()}>INGRESAR</button>
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
export default connect(mapStateToProps)(Login);