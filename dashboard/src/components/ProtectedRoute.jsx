import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        await axios.get("https://zerodha-clone-q795.onrender.com/verify", {
          withCredentials: true,
        });
        setAuthed(true);
      } catch (err) {
        // not authenticated -> redirect to landing
        window.location.href = "https://zerodha-clone-kappa-eight.vercel.app/";
      } finally {
        setLoading(false);
      }
    };
    check();
  }, []);

  if (loading) return null; // or a spinner
  return authed ? <>{children}</> : null;
};

export default ProtectedRoute;
