import React from 'react';
import { Link } from 'react-router-dom';
function PageOne () {
 return (
    <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8" />
      <title>Animated Login Form | CodingNepal</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div class="center">
        <h1>Photo Upload</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Photo</label>
          </div>
          
           <input class="uploadphoto" type="submit" value="Upload" />
          
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Company Logo</label>
          </div>
       
          <input class="uploadphoto" type="submit" value="Upload" />
         
             <div class="reduce"></div>
          
          
          <input type="submit" value="Next" />
          <div class="signup_link"></div>
        </form>
      </div>
    </body>
  </html>
  
 );

};
export default NextPageTwo;

