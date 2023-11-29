import React, { useState } from "react";
import MyContext from "./MyContext";
import defaultimage from "../../Utils/images/Mask Group.png";

const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState([
    {
      songName: "HaHAHA",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
      songSource: "YouTube",
      imageURL: defaultimage,
      addedOn: "Wed Nov 29 2023",
    },
    {
      songName: "Bomber Test2",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      songSource: "YouTube",
      imageURL: defaultimage,
      addedOn: "Wed Nov 19 2023",
    },
    {
      songName: "HGKDSJ 2",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      songSource: "Spotify",
      imageURL: defaultimage,
      addedOn: "Wed Nov 30 2023",
    },
    {
      songName: "Test",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      songSource: "Des",
      imageURL: defaultimage,
      addedOn: "Wed Nov 22 2023",
    },
    {
      songName: "HaHAHA",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
      songSource: "YouTube",
      imageURL: defaultimage,
      addedOn: "Wed Nov 29 2023",
    },
    {
      songName: "HaHAHA",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
      songSource: "YouTube",
      imageURL: defaultimage,
      addedOn: "Wed Nov 29 2023",
    },
    {
      songName: "Bomber Test2",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      songSource: "YouTube",
      imageURL: defaultimage,
      addedOn: "Wed Nov 19 2023",
    },
    {
      songName: "HGKDSJ 2",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      songSource: "Spotify",
      imageURL: defaultimage,
      addedOn: "Wed Nov 30 2023",
    },
    {
      songName: "Test",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      songSource: "Des",
      imageURL: defaultimage,
      addedOn: "Wed Nov 22 2023",
    },
    {
      songName: "HaHAHA",
      songLink:
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
      songSource: "YouTube",
      imageURL: defaultimage,
      addedOn: "Wed Nov 29 2023",
    },
  ]);

  const updateState = (newState) => {
    setMyState(newState);
  };

  return (
    <MyContext.Provider value={{ myState, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
