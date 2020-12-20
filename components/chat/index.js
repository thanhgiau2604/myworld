import React from "react";

function ChatTop() {
  return (
    <div className="top_box">
      <div className="user_icon">
        <i className="fa fa-user-circle" style={{ fontSize: "36px" }} />
      </div>
      <div className="username">Greg</div>
      <div className="online">online</div>
    </div>
  );
}

function ChatBottom() {
  return (
    <div className="bottom_box">
      <div className="send_button">
        <i className="material-icons" id="send" style={{ fontSize: "30px" }}>
          send
        </i>
      </div>
      <i className="material-icons" id="emoji" style={{ fontSize: "28px" }}>
        tag_faces
      </i>
      <div className="bottom_container">
        <span className="tooltip">Greg is offline</span>
        <input className="typing_area" placeholder="Type a message"/>
      </div>
    </div>
  );
}

function ChatCenter() {
  return (
    <div className="center_box">
      <div className="container">
        <div className="you" id="talkbubble_you">
          <p className="textYou">
            Ever had that feeling of guilt, remorse and self-loathing when you
            break something very precious to someone, without which they can't
            function in a normal society and you try to fix it, you scream at
            God, you blame yourself, but all for nothing!
          </p>
          <div className="time">12:15</div>
        </div>
        <div className="me" id="talkbubble_me">
          <p className="textMe">
            Dude I didn't know you were going through so much pain.
          </p>
          <div className="time">12:20</div>
        </div>
        <div className="me" id="talkbox_me">
          <p className="textMe">I'm sure that person will understand</p>
          <div className="time">12:21</div>
        </div>
        <div className="you" id="talkbubble_you">
          <p className="textYou">I broke your phone.</p>
          <div className="time">12:21</div>
        </div>
        <div className="me" id="talkbubble_me">
          <p className="textMe">Fuck =___=</p>
          <div className="time">12:29</div>
        </div>
      </div>
    </div>
  );
}
function Chat() {
  return (
    <>
      <ChatTop />
      <ChatBottom />
      <ChatCenter />
    </>
  );
}

export default Chat;
