import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../slice/feedSlice";
import FeedCard from "../FeedCard/FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((state) => state.feed.feedData);
  console.log("feedData:::", feedData);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div className="flex items-center flex-wrap gap-1">
      {feedData.length > 0 ? (
        feedData.map((feed) => {
          return <FeedCard key={feed._id} feed={feed} />;
        })
      ) : (
        <h1>No Feed</h1>
      )}
    </div>
  );
};

export default Feed;
