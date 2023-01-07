/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface Props {
  isOpen: any;
  close: any;
  activityName: any;
  costPerPerson: any;
  stayingIn: boolean;
  datesAvailable: any;
  weekendGetaway: any;
  neighborhood: any;
  isFoodOption: any;
  hasDrinks: any;
  haveBeen: any;
  description: string;
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
}

const Modal = ({
  isOpen,
  close,
  activityName,
  costPerPerson,
  stayingIn,
  datesAvailable,
  weekendGetaway,
  neighborhood,
  isFoodOption,
  hasDrinks,
  haveBeen,
  description,
  imageUrl,
  imageHeight,
  imageWidth,
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
          <p className={styles.activityTitle}>{activityName}</p>
          {imageUrl && (
            <div
              className={""}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={imageUrl}
                alt={imageUrl}
                height={imageHeight}
                width={imageWidth}
              />
            </div>
          )}
          {costPerPerson && costPerPerson !== 999 ? (
            <p>{`Cost Per Person: $${costPerPerson}`}</p>
          ) : (
            <p>{`Cost Per Person: UNKNOWN`}</p>
          )}
          <p>{`Staying In: ${stayingIn}`}</p>
          <p>{`Dates Available: ${datesAvailable}`}</p>
          <p>{`Weekend Getaway: ${weekendGetaway}`}</p>
          <p>{`Neighborhood: ${neighborhood}`}</p>
          <p>{`Is a food option: ${isFoodOption}`}</p>
          <p>{`Has Drinks: ${hasDrinks}`}</p>
          <p>{`Have Been: ${haveBeen}`}</p>
          {description && <p>{`Description: ${description}`}</p>}
        </div>
      </div>
    </>
  );
};

export default Modal;
