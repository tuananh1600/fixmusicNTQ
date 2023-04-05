import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { musicSlice } from "./musicSlice";

const Page1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(musicSlice.actions.openMusicWaiting())
    setTimeout(() => {
      dispatch(musicSlice.actions.initStateWaiting())
      dispatch(musicSlice.actions.openMusicMatchfound())
      navigate("/page2");
    }, 3000);
  }, []);

  return (  
    <div>
     <div>Page1</div>
    </div>
  );
};

export default Page1;
