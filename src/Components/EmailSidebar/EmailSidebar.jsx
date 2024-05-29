// EmailSidebar.js

import React from "react";
import "./EmailSidebar.css"; // You'll need to create this CSS file for styling

const EmailSidebar = () => {
  return (
    <div className="email-sidebar">
      <h3>Subscribe to our newsletter</h3>
      <input type="email" placeholder="Your email address" />
      <button>Subscribe</button>
    </div>
  );
};

export default EmailSidebar;
