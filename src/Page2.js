import React from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Page2</div>
      <button onClick={() => navigate("/")}>Về home</button>
    </>
  );
};

export default Page2;
