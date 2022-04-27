import React from "react";

const UserProfile = ({ profilePicture, userName }) => {
  return (
    <div className="flex-none">
      <div className="flex flex-col items-center">
        <img
          src={profilePicture}
          alt="profilepicture"
          className="rounded-full bg-java-500 w-14 h-14 object-cover"
        />
        <p className="text-center py-1">{userName}</p>
      </div>
    </div>
  );
};

export default UserProfile;
