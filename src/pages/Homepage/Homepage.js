import React, { useEffect } from "react";
import { axiosClient } from "../../utils/axiosClient";

function Homepage() {
  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    const response = await axiosClient.post("/post/");
    console.log("From home page", response);
  }
  return <div>Homepage</div>;
}

export default Homepage;
