import React from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import resetImg from "../../../assets/forgot.png";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="Login image" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
