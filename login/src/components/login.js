import React, { Component } from 'react';
import '../App.css';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div class="caja">
           <div class="img"></div>

        <form className="card-body">
          <div className="form-group" class="inputcaja">
            <input type="text" name="user" className="form-control" placeholder="" />
            <label for="">User</label>
          </div>
          <div className="form-group" class="inputcaja">
            <input type="password" name="pass" className="form-control" placeholder="" />
            <label for="">Pass</label>
          </div>
          <div className="form-group">
            <input type="button" class="btn" className="form-control" value="Ingresar" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
