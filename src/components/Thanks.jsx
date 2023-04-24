import React from "react";
import { useContext } from "react";
import Card from "./Card";
import AppContext from "../store/AppContext";

const cardText =
  "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

import styles from "./Thanks.module.css";
function Thanks() {
  const ctx = useContext(AppContext);
  return (
    <Card>
      <main className={styles.myMain}>
        <img
          src="./images/illustration-thank-you.svg"
          alt="Phone ilustration"
          className={styles.img}
        />
        <span className={styles.selectedPoints}>{`You selected ${ctx.ratingPointValue} out of 5`}</span>
        <div className={styles.container}>
          <h1>Thank you!</h1>
          <p className={styles.cardText}>{cardText}</p>
        </div>
      </main>
    </Card>
  );
}
export default Thanks;
