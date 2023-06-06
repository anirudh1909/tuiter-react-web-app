import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const tuitItemStyle = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  padding: "10px",
  position: "relative", 
};

const tuitHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
  alignItems: "center", 
};

const userInfoStyle = {
  display: "flex",
  alignItems: "center",
};

const usernameStyle = {
  marginLeft: "5px",
  fontWeight: "bold",
};

const tuitTextStyle = {
  display: "flex",
  flexDirection: "column",
};

function TuitItem({ tuit, onLike }) {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div style={tuitItemStyle}>
      <div style={tuitHeaderStyle}>
        <div style={userInfoStyle}>
          <img
            width={50}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}
            alt=""
          />
          <span style={usernameStyle}>{tuit.userName}</span>&nbsp;
          <FaCheckCircle className="text-primary" />&nbsp;
          <span className="text-secondary">
            {tuit.handle} <BsDot /> {tuit.time}
          </span>
        </div>
        <RxCross2
          className="float-end"
          onClick={() => deleteTuitHandler(tuit._id)}
        />
      </div>
      <div className="tuit-body" style={{ marginBottom: "40px" }}>
        <div style={tuitTextStyle}>
          <div className="tuit-message">{tuit.tuit}</div>
        </div>
      </div>
      <div className="tuit-footer">
        <TuitStats
          comments={tuit.replies}
          retweets={tuit.retuits}
          likes={tuit.likes}
          liked={tuit.liked}
          onLike={() => onLike(tuit._id, tuit.liked)}
        />
      </div>
    </div>
  );
}

export default TuitItem;