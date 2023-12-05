import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { isConstructorDeclaration, setConstantValue } from "typescript";
import Modal from "../components/Modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperStyles from "../styles/Swiper.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Bored.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";

import activities from "../data/activities.json";

export default function Bored() {
  const [isOpen, setIsOpen] = useState(false);
  const [activityName, setActivityName] = useState("Insert Activity Name Here");
  const [costPerPerson, setCostPerPerson] = useState(0);
  const [stayingIn, setStayingIn] = useState(true);
  const [datesAvailable, setDatesAvailable] = useState("year round");
  const [weekendGetaway, setWeekendGetaway] = useState(true);
  const [neighborhood, setNeighborhood] = useState("any");
  const [isFoodOption, setIsFoodOption] = useState(true);
  const [hasDrinks, sethasDrinks] = useState(true);
  const [haveBeen, setHaveBeen] = useState(false);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("/images/missing-image.jpg");
  const [imageHeight, setImageHeight] = useState(408);
  const [imageWidth, setImageWidth] = useState(670);
  const [settings, setSettings] = useState({
    showFood: true,
    showCheap: false,
    showNew: true,
    showGoingOut: true,
  });

  function close() {
    setIsOpen(false);
  }

  function pickActivity() {
    console.log(activities);
    var activitiesFilteredByFoodSettings = activities.filter((obj) => {
      return (
        obj.type == "breakfast"
        // obj.isFoodOption === settings.showFood &&
        // obj.stayingIn !== settings.showGoingOut
        // &&
        // obj.haveBeen !== settings.showNew
      );
    });
    var winner =
      activitiesFilteredByFoodSettings[
        Math.floor(Math.random() * activitiesFilteredByFoodSettings.length)
      ];
    console.log(winner);

    setIsOpen(true);
    setActivityName(winner.activity);
    setCostPerPerson(winner.costPerPerson);
    setStayingIn(winner.stayingIn);
    setDatesAvailable(winner.datesAvailable);
    setWeekendGetaway(winner.weekendGetaway);
    setNeighborhood(winner.neighborhood);
    setIsFoodOption(winner.isFoodOption);
    sethasDrinks(winner.hasDrinks);
    setHaveBeen(winner.haveBeen);
    setDescription(winner.description);
    setImageUrl(winner.imageUrl);
    setImageHeight(winner.imageHeight);
    setImageWidth(winner.imageWidth);
  }

  function pickFood() {
    setSettings({ ...settings, showFood: true });
    console.log("showFood", settings.showFood);
  }

  function pickNonFood() {
    setSettings({ ...settings, showFood: false });
    console.log("showFood", settings.showFood);
  }

  function pickCheapStuff() {
    setSettings({ ...settings, showCheap: true });
    console.log("showCheap", settings.showCheap);
  }

  function pickNonCheapStuff() {
    setSettings({ ...settings, showCheap: false });
    console.log("showCheap", settings.showCheap);
  }

  function pickSomethingNew() {
    setSettings({ ...settings, showNew: true });
    console.log("showNew", settings.showNew);
  }

  function pickSomethingOld() {
    setSettings({ ...settings, showNew: false });
    console.log("showNew", settings.showNew);
  }

  // function pickOldOrNew() {
  //   setSettings({ ...settings, showNew: false || true });
  //   console.log("showNew", settings.showNew);
  // }

  function letsStayIn() {
    setSettings({ ...settings, showGoingOut: false });
    console.log("showGoingOut", settings.showGoingOut);
  }

  function letsGoOut() {
    setSettings({ ...settings, showGoingOut: true });
    console.log("showGoingOut", settings.showGoingOut);
  }

  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  function toggleSettings() {
    setAreSettingsOpen(!areSettingsOpen);
  }

  return (
    <div>
      <Head>
        <title>Activity Picker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Inter&amp;family=Syne:wght@500&amp;display=swap);
        </style>
      </Head>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className={swiperStyles.mySwiper}
        >
          <SwiperSlide className={swiperStyles.slide}>
            <div
              style={{
                backgroundColor: "#0e79b2",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={toggleSettings}
                style={{
                  height: "50px",
                  width: "50px",
                  position: "absolute",
                  top: "5%",
                  right: "10%",
                }}
              >
                {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                <path
                  fill="lightGrey"
                  d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
                />
              </svg>
              {!areSettingsOpen && (
                <button className={styles.pushable} onClick={pickActivity}>
                  <span className={styles.front}>
                    Choose an <br />
                    activity!
                  </span>
                </button>
              )}
              {areSettingsOpen && (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <table
                      style={{
                        width: "80%",
                        position: "absolute",
                        top: "25%",
                        left: "15px",
                      }}
                    >
                      <tr>
                        <th
                          style={{ textAlign: "left", paddingBottom: "20px" }}
                        >
                          Are you looking for an activity...
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          ...with food options?
                        </td>
                        <td>
                          <button
                            onClick={pickFood}
                            style={{
                              color: settings.showFood ? "green" : "lightGrey",
                            }}
                          >
                            Yes
                          </button>
                        </td>
                        <th>
                          <button
                            onClick={pickNonFood}
                            style={{
                              color: settings.showFood ? "lightGrey" : "green",
                            }}
                          >
                            No
                          </button>
                        </th>
                      </tr>
                      {/* <tr>
                        <td style={{ textAlign: "left" }}>
                          ...that&apos;s cheap?
                        </td>
                        <td>
                          <button
                            onClick={pickCheapStuff}
                            style={{
                              color: settings.showCheap ? "green" : "lightGrey",
                            }}
                          >
                            Yes
                          </button>
                        </td>
                        <th>
                          <button
                            onClick={pickNonCheapStuff}
                            style={{
                              color: settings.showCheap ? "lightGrey" : "green",
                            }}
                          >
                            No
                          </button>
                        </th>
                      </tr> */}
                      {/* <tr>
                        <td style={{ textAlign: "left" }}>
                          ...that&apos;s something new?
                        </td>
                        <td>
                          <button
                            onClick={pickSomethingNew}
                            style={{
                              color: settings.showNew ? "green" : "lightGrey",
                            }}
                          >
                            Yes
                          </button>
                        </td>
                        <th>
                          <button
                            onClick={pickSomethingOld}
                            style={{
                              color: settings.showNew ? "lightGrey" : "green",
                            }}
                          >
                            No
                          </button>
                        </th>
                      </tr> */}
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          ...that&apos;s out of the house?
                        </td>
                        <td>
                          <button
                            onClick={letsGoOut}
                            style={{
                              color: settings.showGoingOut
                                ? "green"
                                : "lightGrey",
                            }}
                          >
                            Yes
                          </button>
                        </td>
                        <th>
                          <button
                            onClick={letsStayIn}
                            style={{
                              color: settings.showGoingOut
                                ? "lightGrey"
                                : "green",
                            }}
                          >
                            No
                          </button>
                        </th>
                      </tr>
                    </table>
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      onClick={toggleSettings}
                      style={{
                        color: "lightGrey",
                        width: "50px",
                        textAlign: "center",
                        position: "absolute",
                        top: "65%",
                        left: "40%",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
        <Modal
          isOpen={isOpen}
          close={close}
          activityName={activityName}
          costPerPerson={costPerPerson}
          stayingIn={stayingIn}
          datesAvailable={datesAvailable}
          weekendGetaway={weekendGetaway}
          neighborhood={neighborhood}
          isFoodOption={isFoodOption}
          hasDrinks={hasDrinks}
          haveBeen={haveBeen}
          description={description}
          imageUrl={imageUrl}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          pickActivity={pickActivity}
        />
      </div>
    </div>
  );
}
