import React from 'react';
import './TermsPrivacy.css'; // Importing the shared CSS file

const Terms = () => {
  return (
    <div className="terms-privacy-container">
      <h2 className="terms-privacy-title">Terms of Service</h2>
      <p className="terms-privacy-text">
        Welcome to NewsAir. These terms and conditions outline the rules and regulations for the use of our website.
      </p>
      <p className="terms-privacy-text">
        By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use NewsAir if you do not accept all of the terms and conditions stated on this page.
      </p>
      <h3 className="terms-privacy-subtitle">License</h3>
      <p className="terms-privacy-text">
        Unless otherwise stated, NewsAir and/or its licensors own the intellectual property rights for all material on NewsAir. All intellectual property rights are reserved. You may view and/or print pages from http://newsair.com for your own personal use subject to restrictions set in these terms and conditions.
      </p>
      <h3 className="terms-privacy-subtitle">User Comments</h3>
      <p className="terms-privacy-text">
        Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments') in areas of the website. NewsAir does not filter, edit, publish, or review comments prior to their appearance on the website.
      </p>
    </div>
  );
};

export default Terms;
