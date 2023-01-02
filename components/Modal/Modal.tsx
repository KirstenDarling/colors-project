import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface Props {
  isOpen: any;
  close: any;
  activityName: any;
  cost: any;
  stayingIn: boolean;
  datesAvailable: any;
  weekendGetaway: any;
  neighborhood: any;
  isFoodOption: any;
  hasDrinks: any;
  haveBeen: any;
}

const Modal = ({
  isOpen,
  close,
  activityName,
  cost,
  stayingIn,
  datesAvailable,
  weekendGetaway,
  neighborhood,
  isFoodOption,
  hasDrinks,
  haveBeen,
}: Props) => {
  return (
    <>
      <div
        id="myModal"
        className={`${styles.modalContainer} ${
          isOpen ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.modalContent}>
          <button className={styles.close} onClick={close}>
            &times;
          </button>
          <p>{activityName}</p>
          <p>{`Cost: ${cost}`}</p>
          <p>{`Staying In: ${stayingIn}`}</p>
          <p>{`Dates Available: ${datesAvailable}`}</p>
          <p>{`Weekend Getaway: ${weekendGetaway}`}</p>
          <p>{`Neighborhood: ${neighborhood}`}</p>
          <p>{`Is a food option: ${isFoodOption}`}</p>
          <p>{`Has Drinks: ${hasDrinks}`}</p>
          <p>{`Have Been: ${haveBeen}`}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
