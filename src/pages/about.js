import React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/layout.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutSpacing}>
        <div className={`${styles.leftBox} ${styles.paragraph}`}>Mission</div>
        <div className={`${styles.leftBox} ${styles.container}`}>We aim to build a collection of resources 
        for young members of the AAPI community to improve mental health outcomes. 
        We provide space for long-form thinking and conversation about topics that 
        affect our mental health. We strive to be involved in our communities through
        grassroots work and education initiatives.

Our vision is one where we have love for our food, culture, and heritage, while also having love for ourselves and our health.</div>
      </div>
    </Layout>
  );
}
