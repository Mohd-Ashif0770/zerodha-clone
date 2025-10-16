import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5000/verify", {
          withCredentials: true,
        });
        // authenticated, do nothing
      } catch (err) {
        // not authenticated -> redirect to landing login (Vite dev server)
        window.location.href = "https://zerodha-clone-kappa-eight.vercel.app/";
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
