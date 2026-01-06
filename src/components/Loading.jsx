import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
