import React from 'react';
import './TermsPrivacy.css'; // Importing the shared CSS file

const Privacy = () => {
  return (
    <div className="terms-privacy-container">
      <h2 className="terms-privacy-title">Privacy Policy</h2>
      <p className="terms-privacy-text">
        At NewsAir, accessible from http://newsair.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NewsAir and how we use it.
      </p>
      <h3 className="terms-privacy-subtitle">Log Files</h3>
      <p className="terms-privacy-text">
        NewsAir follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and it’s a part of hosting services’ analytics.
      </p>
      <h3 className="terms-privacy-subtitle">Cookies and Web Beacons</h3>
      <p className="terms-privacy-text">
        Like any other website, NewsAir uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited.
      </p>
    </div>
  );
};

export default Privacy;
