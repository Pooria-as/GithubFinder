import React, { useContext } from "react";
import { UserContext } from "../../Context/User/UserContext";
import { FadeLoader } from "react-spinners";
import UsersList from "./UsersList";

const Users = () => {
  const { users, loading } = useContext(UserContext);

  

  if (loading) {
    return (
      <div className="container flex justify-center items-center h-screen">
        <FadeLoader color={"red"} loading={loading} />
      </div>
    );
  }

  // console.log(users)

  const ShowUsers = users.map(({ id, login, avatar_url }) => (
    <UsersList key={id} login={login} avatar_url={avatar_url} />
  ));
  return (
    <div
      className="container gap-5 mt-20 mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  xl:grid-cols-4
  "
    >
      {ShowUsers}
    </div>
  );
};

export default Users;
