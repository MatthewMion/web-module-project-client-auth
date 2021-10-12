import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const initialState = {
  username: "",
  password: "",
};
export const Login = () => {
  const [credentials, setCredentials] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useHistory();

  const login = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post("http://localhost:5000/api/login", credentials).then((res) => {
      localStorage.setItem("token", res.data.payload);
      setIsLoading(false);
      push("/friendslist");
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};
