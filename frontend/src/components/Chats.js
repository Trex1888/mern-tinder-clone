import React from "react";
import Chat from "../components/Chat";
import "../styles/Chat.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Bobby"
        message="Let's play frisbee!"
        timestamp="25 mins ago"
        profilePic="http://weneedfun.com/wp-content/uploads/2015/10/Cute-puppy-Pictures-29.jpg"
      />
      <Chat
        name="Isla"
        message="Bark, I'm so hungry! 😦"
        timestamp="55 mins ago  "
        profilePic="https://tse1.mm.bing.net/th?id=OIP.X5kMkFdo1M3AQM8jwly-9wHaHa&pid=Api&P=0&w=300&h=300"
      />
      <Chat
        name="Stepanie"
        message="Looks like rain 🌩"
        timestamp="2 hours ago"
        profilePic="http://hddesktopwallpapers.in/wp-content/uploads/2015/09/dogs-photos-free-download.jpg"
      />
      <Chat
        name="Joey"
        message="Let's go for a walk 🐕"
        timestamp="Yesterday"
        profilePic="https://kids.kiddle.co/images/thumb/a/a8/Lava_the_sled_dog.jpg/676px-Lava_the_sled_dog.jpg"
      />
    </div>
  );
}

export default Chats;
