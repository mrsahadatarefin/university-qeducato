import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="h-screen bg-white flex justify-center items-center relative z-50">
        <img className="w-56" src={"/loading.gif"} alt="" />
      </div>
    </div>
  );
};

export default Loading;
