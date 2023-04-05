import React, { useEffect } from "react";
import waiting from "./waiting.mp3";
import { useSelector } from "react-redux";
import matchfound from "./matchfound.mp3";

const Music = ({ children }) => {
  const audioWaiting = new Audio(waiting);
  const audioMatchfound = new Audio(matchfound);
  const isOpenWaiting = useSelector((state) => state.music.isOpenWaiting);
  const isOpenMatchfound = useSelector((state) => state.music.isOpenMatchfound);
  console.log(isOpenWaiting, isOpenMatchfound);

  useEffect(() => {
    isOpenWaiting
      ? (audioWaiting.loop = true && audioWaiting.play())
      : audioWaiting.pause();
    return () => audioWaiting.pause();
  }, [isOpenWaiting]);

  useEffect(() => {
    isOpenMatchfound ? audioMatchfound.play() : audioMatchfound.pause();
    return () => audioMatchfound.pause();
  }, [isOpenMatchfound]);

  return <div>{audioWaiting && audioMatchfound && <div>{children}</div>}</div>;
};

export default Music;
