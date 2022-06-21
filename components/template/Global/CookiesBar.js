import React from "react";

function CookiesBar() {
  return (
    <div>
      {/* Cookies Bar */}
      <div id="cookies-bar" className="body-bar cookies-bar">
        <div className="body-bar-container container">
          <div className="body-bar-text">
            <h4 className="mb-2">Cookies &amp; GDPR</h4>
            <p>
              This is a sample Cookies / GDPR information. You can use it easily
              on your site and even add link to <a href="#">Privacy Policy</a>.
            </p>
          </div>
          <div className="body-bar-action">
            <button className="btn btn-primary" data-accept="cookies">
              <span>Accept</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiesBar;
