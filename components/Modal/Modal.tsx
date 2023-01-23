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
          {imageUrl && (
            <div
              className={""}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "75px",
              }}
            >
              <img
                src={imageUrl}
                alt={imageUrl}
                height="200px"
                width="300px"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <p className={styles.activityTitle}>{activityName}</p>
          {costPerPerson && costPerPerson !== 999 ? (
            <p>{`$${costPerPerson}`}</p>
          ) : (
            <p>{`$??`}</p>
          )}
          {/* <p>{`Staying In: ${stayingIn}`}</p> */}
          {/* <p>{`Dates Available: ${datesAvailable}`}</p> */}
          {/* <p>{`Weekend Getaway: ${weekendGetaway}`}</p> */}
          <p>{neighborhood}</p>
          {/* <p>{`Is a food option: ${isFoodOption}`}</p> */}
          {/* <p>{`Has Drinks: ${hasDrinks}`}</p> */}
          {/* <p>{`Have Been: ${haveBeen}`}</p> */}
          {description && <p>{description}</p>}
        </div>
      </div>
    </>
  );
};

export default Modal;
