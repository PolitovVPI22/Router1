import React from "react";
import Button from "./Button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onChangeLogin(event) {
    this.setState({ login: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <p>
            <label>
              <span className="form">Логин:</span>
              <input
                type="text"
                name="login"
                value={this.state.login}
                onChange={this.onChangeLogin}
              />
            </label>
          </p>
          <p>
            <label>
              <span className="form">Пароль:</span>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </label>
          </p>
          <div className="but">
            <Button
              label="Ввод"
              click={() => {
                localStorage.setItem("login", JSON.stringify(this.state.login));
                localStorage.setItem(
                  "password",
                  JSON.stringify(this.state.password)
                );
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default LoginForm;
