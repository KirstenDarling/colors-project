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
  pickActivity: any;
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
  pickActivity,
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
          <div className={styles.innerContent}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={imageUrl}
                height="200px"
                width="300px"
                style={{ objectFit: "contain" }}
              />
            )}
            <p className={styles.activityTitle}>{activityName}</p>
            <p className={styles.neighborhood}>{neighborhood}</p>
            {/* {costPerPerson && costPerPerson !== 999 && (
              <p className={styles.cost}>{`$${costPerPerson}`}</p>
            )} */}
            {/* <p>{`Staying In: ${stayingIn}`}</p> */}
            {/* <p>{`Dates Available: ${datesAvailable}`}</p> */}
            {/* <p>{`Weekend Getaway: ${weekendGetaway}`}</p> */}
            {/* <p>{`Is a food option: ${isFoodOption}`}</p> */}
            {/* <p>{`Has Drinks: ${hasDrinks}`}</p> */}
            {/* <p>{`Have Been: ${haveBeen}`}</p> */}
            {description && <p>{description}</p>}
            <button className={styles.pushable} onClick={pickActivity}>
              <span className={styles.front}>
                <svg
                  style={{ height: "30px", width: "30px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path
                    fill="white"
                    d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
