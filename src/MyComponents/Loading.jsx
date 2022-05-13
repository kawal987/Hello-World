import React from "react";

const Loading = ({ children, spinning }) => {
  return (
    <>
      {(spinning && (
        <div
          className="bg-gray-900 opacity-50  h-screen"
          style={{
            zIndex: "1000",
            width: "100%",
            position: "fixed",
            top: "0",
            left: "0",
          }}
        >
          <div className="w-full h-full relative flex justify-center items-center">
            {" "}
            <svg
              class="animate-spin  text-white mx-auto relative "
              width="50"
              height={"50"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-50"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )) ||
        children}
    </>
  );
};

export default Loading;
