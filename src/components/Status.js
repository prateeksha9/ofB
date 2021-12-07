import React from 'react';

function Status() {
  return (
    <div className="statusDivMain">
      <div className="statusDiv">
        <div>
          <img
            className="exclaim"
            src="https://cdn-icons-png.flaticon.com/512/0/697.png"
            alt="opened-issues"
          />
        </div>
        <div>
          <h4>495 Open</h4>
        </div>
      </div>
      <div className="statusDiv">
        <div>
          <img
            className="exclaim"
            src="https://media.istockphoto.com/vectors/black-check-mark-icon-tick-symbol-vector-id688548682?k=20&m=688548682&s=170667a&w=0&h=O2HNzjhCdXeMygvzEvzLTjeApTISDLMBiFHPgMUNIhM="
            alt="closed-issues"
          />
        </div>
        <div>
          <h4>495 Closed</h4>
        </div>
      </div>
    </div>
  );
}

export default Status;
