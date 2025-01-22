import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../slice/feedSlice";
import FeedCard from "../FeedCard/FeedCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      if (response) {
        dispatch(addFeed(response?.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) {
    return <h1>No Feeds Available</h1>;
  }

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {feed &&
        feed.map((feedCard, index) => {
          return <FeedCard key={index} feed={feedCard} />;
        })}
    </div>
  );
};

export default Feed;
