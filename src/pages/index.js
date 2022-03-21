import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/layout.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.space}>
          <h1 className={`${styles.meraColor} ${styles.header}`}>Mera</h1>
          <p className={styles.paragraph}>
            — A personalized sequence of interactive mental health tools and
            resources for the AAPI community
          </p>
          <p> 
            Featured Resources
          </p>
        </div>
      </Layout>
    </div>
  );
}
