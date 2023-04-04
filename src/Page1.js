import React, { useEffect, useState } from "react";
import matchfound from "./matchfound.mp3";
import waiting from "./waiting.mp3";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const [audioMatchfound] = useState(new Audio(matchfound));
  useEffect(() => {
    setTimeout(() => {
      audioMatchfound.play();
      navigate("/page2");
    }, 3000);
  }, []);
  return (
    <div>
      <div>Page1</div>
      <audio src={waiting} autoPlay loop />
    </div>
  );
};

export default Page1;
