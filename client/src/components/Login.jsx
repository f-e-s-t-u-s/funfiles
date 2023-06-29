import React from "react";
import "./login.css"
import books from "../images/books.png"

function Login() {
  return (
    <div className="login-page">
      <div className="header">
        <h1>funfolder</h1>
      </div>

      <div class="form">
        <form>
          <label for="username">username</label>
          <br />
          <hr />
          <input type="text" id="username" class="username" name="username" />
          <br />
          <label for="password" id="password" name="password">
            password
          </label>
          <hr />
          <input
            type="password"
            id="password"
            class="password"
            name="password"
          />
        </form>
        <div class="backgroundimg">
          <img
          src= {books}
            alt="books"
            onmouseover="bigImg(this)"
            onmouseout="normalImg(this)"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
