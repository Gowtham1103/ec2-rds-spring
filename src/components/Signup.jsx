import { useState } from "react";
import "./Signup.css";

const BASE_URL =
  "http://ec2-13-232-111-122.ap-south-1.compute.amazonaws.com:8080/auth";

function Signup({ onBack, onSuccess }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    addressLane1: "",
    addressLane2: "",
    district: "",
    state: "",
    pincode: "",
    username: "",
    password: "",
    email: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      username: form.username,
      password: form.password,
      user: {
        firstName: form.firstName,
        lastName: form.lastName,
        dob: form.dob, // yyyy-MM-dd from <input type="date">
      },
      address: {
        addressLane1: form.addressLane1,
        addressLane2: form.addressLane2,
        district: form.district,
        state: form.state,
        pincode: Number(form.pincode),
      },
      contactInfo: {
        email: form.email,
        mobileNo: Number(form.mobileNo),
      },
    };

    console.log("Signup payload:", payload); // just to verify in console

    try {
      const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      if (!res.ok) {
        alert(text || "Signup failed");
        return;
      }

      alert(text || "Signup success");
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="page signup-page">
      <div className="card wide">
        <h2>Sign up</h2>
        <form className="form grid-2" onSubmit={handleSignup}>
          <label>
            First name
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Last name
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date of birth
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </label>

          <div />

          <label>
            Address line 1
            <input
              name="addressLane1"
              value={form.addressLane1}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Address line 2
            <input
              name="addressLane2"
              value={form.addressLane2}
              onChange={handleChange}
            />
          </label>

          <label>
            District
            <input
              name="district"
              value={form.district}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            State
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Pincode
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              required
            />
          </label>

          <div />

          <label>
            New username
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone
            <input
              name="mobileNo"
              value={form.mobileNo}
              onChange={handleChange}
              required
            />
          </label>

          <button className="btn primary full" type="submit">
            Create account
          </button>
        </form>

        <button className="link-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default Signup;
