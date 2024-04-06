import React from "react";

const Nums = ({ num }) => {
  return (
    <div
      style={{
        background: "#afb8c133",
        borderRadius: "10px",
        height: "20px",
        width: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontWeight: "normal",
      }}
    >
      {num}
    </div>
  );
};

export default Nums;
