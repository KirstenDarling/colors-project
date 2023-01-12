import React from "react";
import styles from "../styles/Dustin.module.css";

// const dataStructure1: {
//     dataStructure1: String;
// };

export default function Dustin() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        This is where I&apos;m gonna put a sample Dustin form
      </h1>
      <div className={styles.formContainer}>
        <h2 className={styles.secondaryHeader}>
          Sample Data You&apos;ll Want From Clients
        </h2>
        <label className={styles.labels} htmlFor="dataStructure1">
          Data Structure Item #1
        </label>
        <input className={styles.inputs} type="input" name="dataStructure1" />
        <label className={styles.labels} htmlFor="dataStructure2">
          Data Structure Item #2
        </label>
        <input className={styles.inputs} type="input" name="dataStructure2" />
        <label className={styles.labels} htmlFor="dataStructure3">
          Data Structure Item #3
        </label>
        <input className={styles.inputs} type="input" name="dataStructure3" />
        <label className={styles.labels} htmlFor="dataStructure4">
          Data Structure Item #4
        </label>
        <input className={styles.inputs} type="input" name="dataStructure4" />
        <label className={styles.labels} htmlFor="dataStructure5">
          Data Structure Item #5
        </label>
        <input className={styles.inputs} type="input" name="dataStructure5" />
        <label className={styles.labels} htmlFor="dataStructure6">
          Data Structure Item #6
        </label>
        <input className={styles.inputs} type="input" name="dataStructure6" />
        <label className={styles.labels} htmlFor="dataStructure7">
          Data Structure Item #7
        </label>
        <input className={styles.inputs} type="input" name="dataStructure7" />
        <label className={styles.labels} htmlFor="dataStructure8">
          Data Structure Item #8
        </label>
        <input className={styles.inputs} type="input" name="dataStructure8" />
        <label className={styles.labels} htmlFor="dataStructure9">
          Data Structure Item #9
        </label>
        <input className={styles.inputs} type="input" name="dataStructure9" />
        <label className={styles.labels} htmlFor="dataStructure10">
          Data Structure Item #10
        </label>
        <input className={styles.inputs} type="input" name="dataStructure10" />
      </div>
    </div>
  );
}
