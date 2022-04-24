import React from "react";
import Spinner from "../Spinner/Spinner";
class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      isRegistring: false,
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = () => {
    this.setState({ isRegistring: true });
    if (!this.state.isRegistring) {
      fetch("https://floating-ravine-20611.herokuapp.com/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.registerName,
          email: this.state.registerEmail,
          password: this.state.registerPassword,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange("home");
          }
          this.setState({ isRegistring: false });
        });
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return this.state.isRegistring ? (
      <div
        className="flex-grow-1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    ) : (
      <article className="menu-background br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name:
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email:
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password:
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("signin")}
                className="pointer f6 link dim  db"
              >
                Sign In
              </p>
            </div>
            <div className="lh-copy mt3"></div>
          </div>
        </main>
      </article>
    );
  }
}
export default Register;
