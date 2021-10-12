import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
const initialState = {
  id: "",
  name: "",
  age: "",
  email: "",
};
const FriendForm = () => {
  const [friendForm, setFriendForm] = useState(initialState);
  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friendForm)
      .then((res) => {
        push("/friendslist");
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFriendForm({
      ...friendForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={friendForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={friendForm.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={friendForm.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
