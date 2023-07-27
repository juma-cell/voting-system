import React from "react"
import ProfileHeader from "../components/profile-header"

function Profile() {
  return (
    <>
      <ProfileHeader />

      <div className="flex">
        <div className="w-[50%]">image</div>
        <div className="w-[50%]">profile</div>
      </div>
    </>
  )
}

export default Profile
