import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { isConstructorDeclaration, setConstantValue } from "typescript";
import Modal from "../components/Modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperStyles from "../styles/Swiper.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

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
    showFood: false,
    showCheap: true,
    showNew: true,
    showGoingOut: true,
  });

  function close() {
    setIsOpen(false);
  }

  function pickActivity() {
    console.log("showFood:", settings.showFood);
    console.log("showStayingIn:", !settings.showGoingOut);
    console.log("showNew:", !settings.showNew);
    var activitiesFilteredByFoodSettings = activities.filter((obj) => {
      return (
        obj.isFoodOption === settings.showFood &&
        obj.stayingIn !== settings.showGoingOut &&
        obj.haveBeen !== settings.showNew
      );
    });
    var winner =
      activitiesFilteredByFoodSettings[
        Math.floor(Math.random() * activitiesFilteredByFoodSettings.length)
      ];

    // if (settings.showFood) {
    //   var foodsOnly = activities.filter((obj) => {
    //     return obj.isFoodOption === settings.showFood;
    //   });
    //   var winner = foodsOnly[Math.floor(Math.random() * foodsOnly.length)];
    // } else {
    //   var winner = activities[Math.floor(Math.random() * activities.length)];
    // }

    console.log(winner);
    console.log(winner.activity);
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
    // var foodsOnly = activities.filter((obj) => {
    //   return obj.isFoodOption === true;
    // });
    // var foodWinner = foodsOnly[Math.floor(Math.random() * foodsOnly.length)];
    // alert(foodWinner.activity);
  }

  function pickNonFood() {
    setSettings({ ...settings, showFood: false });
    // var nonFoodsOnly = activities.filter((obj) => {
    //   return obj.isFoodOption === false;
    // });
    // var nonFoodWinner =
    //   nonFoodsOnly[Math.floor(Math.random() * nonFoodsOnly.length)];
    // alert(nonFoodWinner.activity);
  }

  function pickCheapStuff() {
    setSettings({ ...settings, showCheap: true });
  }

  function pickNonCheapStuff() {
    setSettings({ ...settings, showCheap: false });
  }

  // function pickCheapStuff() {
  //   var cheapOnly = activities.filter((obj) => {
  //     return obj.costPerPerson === 0;
  //   });
  //   var cheapWinner = cheapOnly[Math.floor(Math.random() * cheapOnly.length)];
  //   alert(cheapWinner.activity);
  // }

  function pickSomethingNew() {
    setSettings({ ...settings, showNew: true });
  }

  function pickSomethingOld() {
    setSettings({ ...settings, showNew: false });
  }

  // function pickSomethingNew() {
  //   var newOnly = activities.filter((obj) => {
  //     return obj.haveBeen === false;
  //   });
  //   var newWinner = newOnly[Math.floor(Math.random() * newOnly.length)];
  //   alert(newWinner.activity);
  // }

  function letsStayIn() {
    setSettings({ ...settings, showGoingOut: false });
  }

  function letsGoOut() {
    setSettings({ ...settings, showGoingOut: true });
  }

  // function pickAStayingHomeActivity() {
  //   var stayingInOnly = activities.filter((obj) => {
  //     return obj.stayingIn === true;
  //   });
  //   var stayingInWinner =
  //     stayingInOnly[Math.floor(Math.random() * stayingInOnly.length)];
  //   alert(stayingInWinner.activity);
  // }

  // function pickAGoingOutActivity() {
  //   var goingOutOnly = activities.filter((obj) => {
  //     return obj.stayingIn === false;
  //   });
  //   var goingOutWinner =
  //     goingOutOnly[Math.floor(Math.random() * goingOutOnly.length)];
  //   alert(goingOutWinner.activity);
  // }

  return (
    <div>
      <Head>
        <title>Activity Picker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {activities.map((activity) => (
        <h1 key={activity.activity}>{activity.activity}</h1>
      ))} */}
      <div
        className="container"
        style={{
          width: "100%",
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
                backgroundColor: "#f7cac9",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Are you hungry?</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "30%",
                  justifyContent: "space-around",
                }}
              >
                <button onClick={pickFood}>Yes</button>
                <button onClick={pickNonFood}>No</button>
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ marginTop: "25px" }}
                />
              </div>
              {/* <button style={{ width: "20%" }} onClick={pickFood}>
                Choose some food
              </button> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className={swiperStyles.slide}>
            <div
              style={{
                backgroundColor: "#0f4c81",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "white" }}>Are you trying to save rn?</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "30%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button onClick={pickCheapStuff}>
                  Yes, show me cheap &amp; free activities
                </button>
                <button onClick={pickNonCheapStuff}>
                  No, show me everything
                </button>
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{
                    marginTop: "25px",
                    color: "white",
                    width: "50px",
                    textAlign: "center",
                  }}
                />
              </div>
              {/* <button style={{ width: "20%" }} onClick={pickCheapStuff}>
                Choose a cheap activity
              </button> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className={swiperStyles.slide}>
            <div
              style={{
                backgroundColor: "#fa7269",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "white" }}>
                Do you want to do something new??
                <br />
                That you&apos;ve never done before??
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "30%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button onClick={pickSomethingNew}>
                  Yes, I&apos;m feeling adventurous
                </button>
                <button onClick={pickSomethingOld}>
                  No, show me things I&apos;ve done before and know I like
                  already please
                </button>
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{
                    marginTop: "25px",
                    color: "white",
                    width: "50px",
                    textAlign: "center",
                  }}
                />
              </div>
              {/* <button style={{ width: "20%" }} onClick={pickSomethingNew}>
                Try something new
              </button> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className={swiperStyles.slide}>
            <div
              style={{
                backgroundColor: "#88b04b",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "white" }}>
                Do you feel like going out tonight?
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "30%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button onClick={letsGoOut}>Yes, let&apos;s go out</button>
                <button onClick={letsStayIn}>No, I want to stay in</button>
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{
                    marginTop: "25px",
                    color: "white",
                    width: "50px",
                    textAlign: "center",
                  }}
                />
              </div>
              {/* <button style={{ width: "20%" }} onClick={pickAGoingOutActivity}>
                Let&apos;s go out
              </button> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className={swiperStyles.slide}>
            <div
              style={{
                backgroundColor: "#b06781",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className=""
                onClick={pickActivity}
                style={{ width: "20%" }}
              >
                Choose an activity
              </button>
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
        />
      </div>
    </div>
  );
}
