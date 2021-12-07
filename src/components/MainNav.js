import React from 'react';
import { MainNavSub } from '.';

function MainNav() {
  return (
    <div className="userNav">
      <div className="repoName">
        <span className="userName">Facebook/</span>
        <h1>create-react-app</h1>
      </div>
      <MainNavSub />
    </div>
  );
}

export default MainNav;
