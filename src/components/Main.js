import React from "react";

export default function Main() {
    return(
        
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Animated Login Form | CodingNepal</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="center">
      <h1>Login</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>JobTitle</label>
        </div>
       
        
        
        <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Company</label>
        </div>
        
         <div class="txt_field">
          <input type="password" required />
          <span></span>
          <label>Email</label>
        </div>
        
        <input type="submit" value="Login" />
        <div class="signup_link"></div>
      </form>
    </div>
  </body>
</html>

    )
}