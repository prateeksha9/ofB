import React from 'react';

function PostCard(props) {
  const posts = props.posts;

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <div className="card">
            <div className="title">
              {/* <div>
                <img
                  className="image"
                  src="https://www.pngall.com/wp-content/uploads/8/Warning-Sign-PNG-Image.png"
                  alt="issue"
                />
              </div> */}

              <h3> {item.title}</h3>
            </div>

            <div className="containers">
              {item.labels.map((issue, index) => (
                <div
                  key={index}
                  className="issue"
                  style={{ backgroundColor: `#${issue.color}` }}
                >
                  <h3 style={{ color: '#00021B' }}>{issue.name}</h3>
                </div>
              ))}
            </div>
            <div className="openedBy">
              <p>
                #{item.number} opened 4 hours ago by {item.user.login}
              </p>
            </div>

            <div className="container-right">
              <img
                src="https://aux.iconspalace.com/uploads/comments-icon-256.png"
                className="commentIcon"
                alt="chat"
              />
              <span>{item.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
