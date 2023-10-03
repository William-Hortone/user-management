import React from "react";
import styles from "../auth.module.scss";
import loginImg from "../../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../../components/card/Card";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login image" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>

          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">reset Password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" /> login with Google
          </button>
          <span className={styles.register}>
            <p>Don't have an account? </p>
            <Link>Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
