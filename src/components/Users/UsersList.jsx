import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ login, avatar_url }) => {
  return (
    <div className="card card-side  gap-4 shadow-md">
      <figure>
        <img className="rounded-full w-20" src={`${avatar_url}`} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="container lg:w-15 flex flex-wrap justify-between items-center">
          <h2 className="card-title">{login}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-ghost">
              <Link to={`/users/${login}`}>See Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
