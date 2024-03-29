
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import axios from "axios";

const DeleteUser = () => {
  const [userId, setUserId] = useState("");

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/users/${userId}`, {
        headers: { Token: localStorage.getItem("token") },
      })
      .then(() => {
        alert("user deleted");
      })
      .catch((err) => console.log(err));
    console.log("User ID submitted:", userId);
  };

  return (
    <div className="container mt-4">
      <h2>Enter User ID</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="User ID"
            value={userId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;
