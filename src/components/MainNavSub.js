import React from 'react';

function MainNavSub(props) {
  return (
    <div className="header-subNav">
      <div className="header-sub">
        <img
          className="icon"
          src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/code-512.png"
          alt="arrow"
        />
        <span>Code</span>
      </div>
      <div className="header-sub">
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/0/697.png"
          alt="arrow"
        />
        <span>Issues</span>
      </div>
      <div className="header-sub">
        <img
          className="icon"
          src="https://www.pinclipart.com/picdir/middle/195-1958848_good-evening-everyone-pull-request-icon-clipart.png"
          alt="arrow"
        />
        <span>Pull Requests</span>
      </div>

      <div className="header-sub">
        <img
          className="icon"
          src="https://www.clipartmax.com/png/small/150-1505127_discussion-comments-discussion-icon-png.png"
          alt="arrow"
        />
        <span>Discussions</span>
      </div>

      <div className="header-sub">
        <img
          className="icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9sGpjxlsJu1eBQCzgBAOalw9WL9hPYnnJRcVBIFQ6McaycDHDAkKJK2z-9EOcEwGjis&usqp=CAU"
          alt="arrow"
        />
        <span>Actions</span>
      </div>
      <div className="header-sub">
        <img
          className="icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwdol-zHtvLHs7ub-EUW0FB6leMDNeB1S-Mxt1RZpPXD1rZ6FaKYXJPglMiG741FaZO0&usqp=CAU"
          alt="arrow"
        />
        <span>Projects</span>
      </div>
    </div>
  );
}

export default MainNavSub;
