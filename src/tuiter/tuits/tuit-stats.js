import React, { useState } from "react";
import tuit from '../tuit-summary-list/tuits.json';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

import { IoChatbubbleOutline, IoRepeat, IoHeart, IoHeartOutline, IoCloudUploadOutline, IoThumbsDown, IoThumbsDownOutline } from "react-icons/io5";

function TuitStats({ comments, retweets, likes, dislikes, liked, disliked }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  const [isDisliked, setIsDisliked] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
    dispatch(updateTuitThunk({ ...tuit, likes: likeCount }));
  };

  const handleDislikeClick = () => {
    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }));
    setDislikeCount((prevDislikeCount) => prevDislikeCount + 1);
  };
  
  
  


  const LikeIcon = isLiked ? IoHeart : IoHeartOutline;
  const likeColor = isLiked ? "red" : "";
  const DislikeIcon = isDisliked ? IoThumbsDown : IoThumbsDownOutline;
  const dislikeColor = isDisliked ? "blue" : "";

  return (
    <div className="row mt-2 text-secondary">
      <div className="col">
        <IoChatbubbleOutline />&nbsp;
        <span className="comments">{comments}</span>
      </div>
      <div className="col">
        <IoRepeat />&nbsp;
        <span className="retweets">{retweets}</span>
      </div>
      <div className="col" onClick={handleLikeClick}>
        <LikeIcon style={{ color: likeColor }} />&nbsp;
        <span>{likeCount}</span>
      </div>
      <div className="col" onClick={handleDislikeClick}>
        <DislikeIcon style={{ color: dislikeColor }} />&nbsp;
        <span>{dislikeCount}</span>
      </div>
      <div className="col">
        <IoCloudUploadOutline />
      </div>
    </div>
  );
}

export default TuitStats;