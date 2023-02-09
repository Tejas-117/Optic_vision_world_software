import "./Login.css";
import logo from '../../assets/LOGO.svg';

function Login() {
  return (
    <div class="main-container">
      <div class="branding-container">
        <p class="title">Administration & Management Services </p>
        <img class="logo-img" src={logo} alt="" />
      </div>
      <div class="login-container">
        <form class="login-form">
          <h1 class="general-text-format">Welcome back !</h1>

          <h4 class="secondary-text-format">
            Enter your login details to continue with your work...
          </h4>

          <input
            class="login-inputbox"
            type="email"
            name="user"
            placeholder="Enter Email"
          />
          <input
            class="login-inputbox"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <select class="login-inputbox" value="names">
            <option value="00">Receptionist</option>
            <option value="01">User 1</option>
            <option value="02">User 2</option>
          </select>

          <input
            class="login-button"
            type="submit"
            name="submitAll"
            value="Login"
          />
          <p class="trouble"> Having trouble in signing ?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
