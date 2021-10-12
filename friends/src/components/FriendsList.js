import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";
export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
};
