import { useState } from "react";
import { data } from "../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeID = Date.now();
    // console.log(fakeID);
    const newUser = { id: fakeID, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <center>
        <h1>Users</h1>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h4>{user.name}</h4>
              <button
                onClick={() => removeUser(user.id)}
                className="btn-remove"
              >
                remove
              </button>
            </div>
          );
        })}
      </center>
    </div>
  );
};

export default UserChallenge;
