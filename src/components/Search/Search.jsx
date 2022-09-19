import React, { useRef, useState, useContext } from "react";
import { UserContext } from "../../Context/User/UserContext";
import Alert from "../Alert/Alert";

const Search = () => {
  const { users, FetchSearchUsers, ClearUsers, setErrorMessage } =
    useContext(UserContext);
  const [text, setText] = useState();
  const TextRef = useRef();

  const handleChange = () => {
    const TextValue = TextRef.current.value;
    setText(TextValue);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let Text = TextRef.current.value;

    if (Text === "") {
      // setAlert("Please Enter something", "error");
      setErrorMessage("Please Enter something", true);
    } else {
      // @todo search for Github's users
      FetchSearchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xs:grid-cols-1 mt-10 ml-20">
      <Alert />
      <form onSubmit={handlerSubmit}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              onChange={handleChange}
              value={text || ''}
              ref={TextRef}
              className="input bg-white input-bordered w-screen"
            />
            <button type="submit" className="btn btn-neutral mr-10">
              Go
            </button>
          </div>
        </div>
      </form>
      <div>
        {users.length ? (
          <button className="btn btn-ghost" onClick={ClearUsers}>
            Clear
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
