import axios from "axios";
import { useState } from "react";

function UpdateUser() {
  // const [userId, setUserId] = useState();
  const [formData, setFormData] = useState({
    id:'',
    username: "",
    email: "",
    password: "",
    re_password: "",
    is_active: true,
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem('token'))
    const { id,username, email, password, re_password, is_active, role } =
      formData;
    console.log(formData)
    console.log(`http://localhost:3001/users/${id}`)
    axios
      .put(
        `http://localhost:3001/users/${id}`,
        {
          id:Number(id),
          username: username,
          email: email,
          password: password,
          re_password: re_password,
          is_active: is_active,
          roles: [{ id: +role }],
        },
        { headers: { Token: localStorage.getItem("token") } }
      )
      .then((res) =>{ 
        console.log(res)
        alert("updated")

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        {/* <input
          name="userId"
          placeholder="user id"
          onChange={(e) => setUserId(e.target.value)}
        ></input>
        <button type="button" onClick={getUser}>get user</button> */}
      </div>
      <div className="container mt-5 opacity">
      <div className="row justify-content-center">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">update user</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Conform Password"
                    name="re_password"
                    value={formData.re_password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="boolean"
                    className="form-control"
                    placeholder="isActive"
                    name="is_active"
                    value={formData.is_active}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default UpdateUser;
