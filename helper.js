/**
 * Get posts of a specific type from a subreddit.
 * 
 * @param {string} subreddit - name of subreddit
 * @param {string} type - type of posts (e.g., 'new', 'top', 'all')
 * @return {undefined}
 */
export function getPosts(subreddit, type) {
  const url = 'https://www.reddit.com/r/' + subreddit + '/' + type + '.json';

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log(json); // useful for debugging during development

      // TODO: add empty state handling
      createPostItems(json.data.children);
    })
    .catch(function (error) {
      console.log('There was an issue fetching the data. ' + response.error);
    });
}

/**
 * Create list items using fetched reddit posts
 * 
 * @param {object} data 
 * @return {undefined}
 */
function createPostItems(data) {
  const postsList = document.querySelector('.c-reddit__posts');

  if (postsList) {
    for (let item of data) {
      let listItem = document.createElement('li');

      let anchorItem = document.createElement('a');
      anchorItem.setAttribute('href', item.data.url);
      anchorItem.setAttribute('alt', item.data.title);
      anchorItem.innerText = item.data.title;

      listItem.appendChild(anchorItem);
      postsList.appendChild(listItem);
    }
  } else {
    console.log('No data');
  }
}