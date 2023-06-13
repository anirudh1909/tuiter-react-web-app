import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "./services/auth-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = () => {
    console.log(profile);
    dispatch(updateUserThunk(profile));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload || { firstName: "", lastName: "" });
    };

    fetchProfile();
  }, [dispatch]);

  console.log("profile1", profile);

  return (
    <div>
      <h1>Profile Screen</h1>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={profile.firstName}
          onChange={(event) => {
            const newProfile = {
              ...profile,
              firstName: event.target.value,
            };
            setProfile(newProfile);
          }}
          style={{
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={profile.lastName}
          onChange={(event) => {
            const newProfile = {
              ...profile,
              lastName: event.target.value,
            };
            setProfile(newProfile);
          }}
          style={{
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/tuiter/login");
        }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      >
        Logout
      </button>
      <button
        onClick={save}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Save
      </button>
    </div>
  );
}

export default ProfileScreen;
