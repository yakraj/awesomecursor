import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [backgroundimg, onbackgroundimg] = useState(
    "https://cdn.pixabay.com/photo/2017/10/25/12/13/landscapes-2887796_960_720.jpg"
  );

  const [ball, onball] = useState(false);
  const [mousetop, onmousetop] = useState(0);
  const [mouseleft, onmouseleft] = useState(0);
  const CursorFollower = useRef();
  const BallParent = useRef();
  const FirstEmt = useRef();
  const lastEmt = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      onmousetop(e.pageY - 25);
      onmouseleft(e.pageX - 25);
    });

    BallParent.current.addEventListener("mouseenter", (event) => {
      onball(true);
      onbackgroundimg(
        "https://cdn.pixabay.com/photo/2017/10/25/12/13/landscapes-2887796_960_720.jpg"
      );
    });

    FirstEmt.current.addEventListener("mouseenter", (event) => {
      onball(false);
    });
    lastEmt.current.addEventListener("mouseenter", (event) => {
      onbackgroundimg(
        "https://cdn.pixabay.com/photo/2015/09/09/18/46/city-932511_960_720.jpg"
      );
    });
  });

  return (
    <div className="App">
      <div ref={FirstEmt} id="first-empty"></div>

      <div ref={BallParent} id="ball-parent">
        <div
          style={{
            top: mousetop,
            left: mouseleft,
            background: ball ? `url(${backgroundimg})` : null
          }}
          ref={CursorFollower}
          id="ball"
          className={ball ? "ball" : "cursor"}
        />
        <div className="text">
          <h1>
            BELIEVE ME
            <br />
            <span>HIDDEN IMAGE</span>
            <br />
            <span>MOVE MOUSE</span>
          </h1>
        </div>
      </div>

      <div ref={lastEmt} id="last-empty"></div>
    </div>
  );
}
