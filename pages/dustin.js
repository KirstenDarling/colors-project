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
          Dustin wants to know stuff aboot the client...
        </h2>
        <label className={styles.labels} htmlFor="dataStructure1">
          What&apos;s their NAME this is REQUIRED
        </label>
        <input className={styles.inputs} type="input" name="dataStructure1" />
        <label className={styles.labels} htmlFor="dataStructure2">
          What&apos;s their EMAIL this is REQUIRED it will be the unique
          identifier, no two accounts will be associated with the same email
        </label>
        <input className={styles.inputs} type="input" name="dataStructure2" />
        <label className={styles.labels} htmlFor="dataStructure3">
          What is the client looking to do? We can give them options to choose
          from in button or select one from a list where you fill in the dot or
          select one from list on a drop down (often used to select a state from
          a list of states) Option examples: Book a tattoo appointment, Book a
          consultation, sign up for email/deals, enter to win drawing, fellow
          artist contact form type thing for peopole to hit you up with collabs
          or ideas
        </label>
        <input className={styles.inputs} type="input" name="dataStructure3" />
        <label className={styles.labels} htmlFor="dataStructure4">
          You could pre load a consent form to be filled out ahead of time,
          optionally
        </label>
        <input className={styles.inputs} type="input" name="dataStructure4" />
        <label className={styles.labels} htmlFor="dataStructure5">
          Description of tattoo you want?
        </label>
        <input className={styles.inputs} type="input" name="dataStructure5" />
        <label className={styles.labels} htmlFor="dataStructure6">
          Where do you want it?
        </label>
        <input className={styles.inputs} type="input" name="dataStructure6" />
        <label className={styles.labels} htmlFor="dataStructure7">
          What style? Color?
        </label>
        <input className={styles.inputs} type="input" name="dataStructure7" />
        <label className={styles.labels} htmlFor="dataStructure8">
          Reference photo of tattoo idea. This should be optional.
        </label>
        <input className={styles.inputs} type="input" name="dataStructure8" />
        <label className={styles.labels} htmlFor="dataStructure9">
          client and artist of appointment, client email should include reminder
          to bring id blah blah blah, artist email notification will include
          details collected about the upcoming appointment, could also use this
          date data to automate an email the day of the tattoo appointment x
          hours later reminding them about aftercare instructions
        </label>
        <input className={styles.inputs} type="input" name="dataStructure9" />
        <label className={styles.labels} htmlFor="dataStructure10">
          Where did you here about Dustin Jenness make this q REQUIRED to
          collect marketing data. select one: insta, google, facebook,
          friend/coworker - if choosen i can give them a blank to fill in,
          other, this can show you which ads your paying for are actually
          bringing you the most shite
        </label>
        <input className={styles.inputs} type="input" name="dataStructure10" />
        <label className={styles.labels} htmlFor="dataStructure10">
          zip code. you could make it optional or required but itll let you
          gather demographic information on where all your clients are coming
          from. ex. eventually you might notice 50% of your customers are coming
          from Montana so maybe you could open a shop there lol but you get the
          point
        </label>
        <input className={styles.inputs} type="input" name="dataStructure10" />
      </div>
    </div>
  );
}
