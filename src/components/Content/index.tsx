import React from "react";
import { Theme, ThemeContext } from "../Context";
import "./style.css";

export const Content: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div
          id="container"
          className={theme.theme === Theme.DARK ? "container-dark-mode" : ""}
        >
          <div
            className={`content ${
              theme.theme === Theme.DARK && "content-dark-mode"
            }`}
          >
            <h1>Light & Dark Mode</h1>
            <button
              id="toggleDayOrNight"
              className={
                theme.theme === Theme.DARK ? "nightBackground" : "dayBackground"
              }
              onClick={() => theme.setCurrentTheme(theme.theme)}
            ></button>
            <h3>jQuery</h3>
            <p>
              jQuery is a fast, small, and feature-rich JavaScript library. It
              makes things like HTML document traversal and manipulation, event
              handling, animation, and Ajax much simpler with an easy-to-use API
              that works across a multitude of browsers. With a combination of
              versatility and extensibility, jQuery has changed the way that
              millions of people write JavaScript.
            </p>
            <a
              className={`btn ${theme.theme === 0 && "btn-dark-mode"}`}
              href="https://jquery.com/"
              target="_blank"
            >
              Go to website
            </a>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
