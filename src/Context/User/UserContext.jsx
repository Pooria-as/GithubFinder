import axios from "axios";
import React, { useReducer, useState } from "react";
import UserReducer from "./UserReducer";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [searchErrorMessage, SetsearchErrorMessage] = useState({
    message: "",
    error: false,
  });

  const setErrorMessage = (msg, err) => {
    SetsearchErrorMessage({ message: msg, error: err });
    setTimeout(() => {
      setErrorMessage({ error: false });
    }, 4000);
  };

  const initialState = {
    users: [],
    user: {},
    repositories: [],
    loading: false,
  };



  const [state, dispatch] = useReducer(UserReducer, initialState);
  
  //get all users form api
  const FetchSearchUsers = async (SearchText) => {
    setLoading();
    const param = new URLSearchParams({
      q: SearchText,
    });
    setLoading();
    const users = await axios.get(
      `${process.env.REACT_APP_GITHUB_API_URL}/search/users?${param}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
        },
      }
    );
    const usersdata = users.data;
    dispatch({
      type: "GET_USERS",
      payload: usersdata.items,
    });
  };
  //set loading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  //set clear users
  const ClearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  //get single user by usernmae or id
  const FetchSingleUser = async (username) => {
    setLoading();

    const user = await axios.get(
      `${process.env.REACT_APP_GITHUB_API_URL}/users/${username}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
        },
      }
    );

    if (user.status === 404) {
      console.log("404");
    }

    const singleUserData = user.data;

    dispatch({
      type: "GET_SINGLE_USER",
      payload: singleUserData,
    });
  };

  //get user repositories

  const FetchUserRepos = async (username) => {
    setLoading();

    const Repos = await axios.get(
      `${process.env.REACT_APP_GITHUB_API_URL}/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
        },
      }
    );
    if (Repos.status === 404) {
      console.log("404");
    }

    const userRepos = Repos.data;
    dispatch({
      type: "GET_USER_REPOS",
      payload: userRepos,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repositories,
        loading: state.loading,
        FetchSearchUsers,
        ClearUsers,
        searchErrorMessage,
        setErrorMessage,
        FetchSingleUser,
        FetchUserRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
