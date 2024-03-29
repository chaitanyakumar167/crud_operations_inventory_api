import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function CreateUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
    is_active:true,
    branch: "",
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
    const { username, email, password, re_password, is_active, branch, role } =
      formData;
    
    axios
      .post("http://localhost:3001/users", {
        username: username,
        email: email,
        password: password,
        re_password: re_password,
        is_active: is_active,
        branch: +branch,
        roles: [{ id: +role }],
      },{headers:{'Token':localStorage.getItem('token')}})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create Account</h4>
              <form onSubmit={handleSubmit}>
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
                    placeholder="Branch"
                    name="branch"
                    value={formData.branch}
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
                  Rigister Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
