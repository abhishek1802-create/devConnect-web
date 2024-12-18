import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";

const Feed = () => {
  const feedData = useSelector((state) => state.feed.feedData);
  console.log("feedData:::", feedData);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return <div>Feed</div>;
};

export default Feed;
