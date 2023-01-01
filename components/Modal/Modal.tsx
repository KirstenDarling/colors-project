import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Modal(
  isOpen: any,
  close: any,
  activityName: any,
  cost: any,
  stayingIn: boolean,
  datesAvailable: any,
  weekendGetaway: any,
  neighborhood: any,
  isFoodOption: any,
  hasDrinks: any,
  haveBeen: any
) {
  console.log(isOpen);
  return (
    <>
      <div
        id="myModal"
        className={`${styles.modalContainer} ${
          isOpen.isOpen ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.modalContent}>
          <button className={styles.close} onClick={isOpen.close}>
            &times;
          </button>
          <p>{isOpen.activityName}</p>
          <p>{`Cost: ${isOpen.cost}`}</p>
          <p>{`Staying In: ${isOpen.stayingIn}`}</p>
          <p>{`Dates Available: ${isOpen.datesAvailable}`}</p>
          <p>{`Weekend Getaway: ${isOpen.weekendGetaway}`}</p>
          <p>{`Neighborhood: ${isOpen.neighborhood}`}</p>
          <p>{`Is a food option: ${isOpen.isFoodOption}`}</p>
          <p>{`Has Drinks: ${isOpen.hasDrinks}`}</p>
          <p>{`Have Been: ${isOpen.haveBeen}`}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
