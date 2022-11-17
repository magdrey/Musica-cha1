import React, { useState } from "react";
import {
  BiShuffle,
  BiSkipPrevious,
  BiPlay,
  BiSkipNext,
  BiPause,
  BiVolume,
} from "react-icons/bi";
import { TbRepeat, TbRepeatOnce } from "react-icons/tb";
import { songlib } from "./Musiclib";
import { useRef } from "react";
import { useEffect } from "react";
import arrayShuffle from "array-shuffle";

function Player() {
  const [songs, setSongs] = useState(songlib);
  const [isplaying, setIsplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [volume, setVolume] = useState(50);
  const [shuff, setShuff] = useState(false);
  const [rpt, setRpt] = useState("all");

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
    }
  }, [volume]);

  const audioElem = useRef();

  const clickRef = useRef();

  const playpause = () => {
    setIsplaying(!isplaying);
    console.log(audioElem.current.duration);
    console.log(currentSong.progress);
    console.log(audioElem.current.currentTime);
  };

  const Onplaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: ct,
      length: duration,
    });
  };

  const skipfront = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    setIsplaying(true);
  };
  const skipback = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    setIsplaying(true);
  };

  const shuffshuff = () => {
    setShuff(!shuff);
    if (isplaying) {
      const shuffledlib = arrayShuffle(songlib);
      setSongs(shuffledlib);
    } else {
    }
  };

  const rptbut = () => {
    if (rpt === "all") {
      setRpt("one");
    } else if (rpt === "one") {
      setRpt("no");
    } else {
      setRpt("all");
    }
  };

  const handleLoop1 = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (rpt === "all") {
      skipfront();
    } else if (rpt === "one") {
    } else if (rpt === "no" && index === songs.length - 1) {
      setIsplaying(false);
    } else {
      skipfront();
    }
  };

  return (
    <div className="player">
      <div className="playing-dts">
        <div className="p-dts-img">{currentSong.img}</div>
        <div className="p-dts-txts">
          <p className="p-dts-title"> {currentSong.title}</p>
          <p className="p-dts-ar"> {currentSong.artist}</p>
        </div>
      </div>

      <div className="playing-ctl">
        <audio
          src={currentSong.musc}
          ref={audioElem}
          onTimeUpdate={Onplaying}
          onEnded={handleLoop1}
        />
        <div className="p-ctl-1">
          <BiShuffle
            className={`${shuff ? "shuffT ctlp" : "shuff ctlp"}`}
            onClick={shuffshuff}
          />
          <BiSkipPrevious className="back ctlp" onClick={skipback} />
          {isplaying ? (
            <BiPause className="play ctlp" onClick={playpause} />
          ) : (
            <BiPlay className="play ctlp" onClick={playpause} />
          )}
          <BiSkipNext className="next ctlp" onClick={skipfront} />

          {rpt === "all" ? (
            <TbRepeat onClick={rptbut} className="rpt1 ctlp" />
          ) : rpt === "one" ? (
            <TbRepeatOnce onClick={rptbut} className="rpt2 ctlp" />
          ) : (
            <TbRepeat onClick={rptbut} className="rpt ctlp" />
          )}
        </div>
        <div className="p-ctl-2">
          <input
            type="range"
            id="seek"
            className="sbar"
            max={audioElem?.current?.duration || 250.5}
            min="0"
            ref={clickRef}
            value={audioElem?.current?.currentTime || 0}
            onChange={(event) => {
              audioElem.current.currentTime = event.target.value;
            }}
          />

          {/*  <div className="bar-pl" onClick={checkwidth} ref={clickRef}>
            <div  className="seek-bar"  style={{ width: `${currentSong.progress + "%"}` }}></div>  
          </div> */}
        </div>
      </div>
      <div className="playing-vl">
        <BiVolume className="volicon" />
        <input
          type="range"
          style={{
            backgroundSize: `${volume}% 100% `,
          }}
          id="vol"
          max="100"
          min="0"
          value={volume}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </div>
    </div>
  );
}

export default Player;
