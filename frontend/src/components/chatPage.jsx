import { useEffect, useRef, useState } from "react";
import "./chatPages.css";
import { chatApi } from "../services/api";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  // load old messages once
  useEffect(() => {
    const loadMessages = async () => {
      const res = await chatApi.getChat();
      setMessages(res.data);
    };
    loadMessages();
  }, []);

  // socket listener
  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;

    const messageData = {
      sender_id: user.id,
      sender_name: user.name || user.full_name,
      message: text,
      created_at: new Date(),
    };

    // realtime
    socket.emit("sendMessage", messageData);

    // save to DB
    await chatApi.sendChat({
      senderId: user.id,
      senderName: messageData.sender_name,
      message: text,
    });

    setText("");
  };

  if (!user) return <p>Please login</p>;

  return (
    <div className="chat-container">
      <div className="chat-header">Community Chat</div>

      <div className="chat-messages">
        {messages.map((msg, i) => {
          const isMe = msg.sender_id === user.id;

          return (
            <div key={i} className={`chat-row ${isMe ? "right" : "left"}`}>
              <div className={`chat-bubble ${isMe ? "me" : "other"}`}>
                {!isMe && (
                  <div className="sender-name">{msg.sender_name}</div>
                )}
                <div className="chat-text">{msg.message}</div>
                <div className="chat-time">
                  {new Date(msg.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef}></div>
      </div>

      <div className="chat-input">
        <input
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
