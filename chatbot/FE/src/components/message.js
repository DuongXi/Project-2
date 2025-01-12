import React from "react";
import "./message.css";

const Message = ({ text, type, avatar }) => {
  return (
    <div className={`message-container ${type}`}>
      {type === "received" && avatar && (
        <img src={avatar} alt="AI Avatar" className="avatar" />
      )}
      <div className={`message ${type}`}>
        <div
        dangerouslySetInnerHTML={{
          __html: text.replace(/\n/g, "<br>"),
        }}
      /></div>
    </div>
  );
};

export default Message;
