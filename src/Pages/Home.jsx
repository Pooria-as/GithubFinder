import React from "react";
import Search from "../components/Search/Search";
import Users from "../components/Users/Users";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Search />
      <Users />
    </div>
  );
};

export default Home;
