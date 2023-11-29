import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { ReactComponent as PrevButton } from "../../Utils/images/prev.svg";
import { ReactComponent as PauseButton } from "../../Utils/images/pause.svg";
import { ReactComponent as NextButton } from "../../Utils/images/next.svg";
import play from "../../Utils/images/play.png";
const AudioPlayer = ({ playable_song, playNextSong, playPrevSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);
  useEffect(() => {
    setIsPlaying(false);
  }, [playable_song]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="">
      <audio
        ref={audioRef}
        src={playable_song?.songLink}
        onTimeUpdate={handleTimeUpdate}
        autoplay
      />
      <input
        type="range"
        value={currentTime}
        max={audioRef.current && audioRef.current.duration}
        onChange={handleSeek}
        className={"selector-audio"}
      />
      <div className={"audio-her-container"}>
        <div className={"audio-details"}>
          <img
            src={playable_song?.imageURL}
            alt={playable_song?.songName}
            width={66}
            height={66}
          />
          <span className={"typo-song-name-player"}>
            {playable_song?.songName}
          </span>
        </div>
        <div className={"selector-audio"}>
          <span className={"cursor-pointer"} onClick={playPrevSong}>
            <PrevButton />
          </span>
          <span className={"cursor-pointer"} onClick={handlePlayPause}>
            {isPlaying ? (
              <PauseButton />
            ) : (
              <img src={play} width={23} height={23} alt={"def"} />
            )}
          </span>
          <span className={"cursor-pointer"} onClick={playNextSong}>
            <NextButton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
