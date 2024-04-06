import React from "react";

const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
