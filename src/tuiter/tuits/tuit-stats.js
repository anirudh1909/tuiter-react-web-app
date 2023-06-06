import React, { useState } from "react";
import { IoChatbubbleOutline, IoRepeat, IoHeart, IoHeartOutline, IoCloudUploadOutline } from "react-icons/io5";

function TuitStats({ comments, retweets, likes, liked }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const LikeIcon = isLiked ? IoHeart : IoHeartOutline;
  const likeColor = isLiked ? "red" : "";

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
      <div className="col">
        <IoCloudUploadOutline />
      </div>
    </div>
  );
}

export default TuitStats;
