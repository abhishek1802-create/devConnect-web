import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../slice/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    if (userData) {
      return;
    }

    try {
      const response = await axios.get("http://localhost:7777/profile", {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
    } catch (err) {
      navigate("/login");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
