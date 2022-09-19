import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/User/UserContext";
import RepositoryItem from "./RepositoryItem";

const Repository = () => {
  const { username } = useParams();
  const { FetchUserRepos, repos } = useContext(UserContext);
  useEffect(() => {
    FetchUserRepos(username);
  }, []);

  const ShowRepos = repos.map((repo) => (
    <RepositoryItem key={repo.id} repo={repo} />
  ));

  return (
    <div className="rounded-lg shadow-lg card bg-base-100 mb-10">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {ShowRepos}
      </div>
    </div>
  );
};

export default Repository;
