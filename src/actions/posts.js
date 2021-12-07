import { UPDATE_POSTS } from './actionTypes';

export default function fetchPosts() {
  return (dispatch) => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
