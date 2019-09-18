/**
 * Get posts of a specific type from a subreddit.
 * 
 * @param {string} subreddit - name of subreddit
 * @param {string} type - type of posts (e.g., 'new', 'top', 'all')
 * @return {undefined}
 */
function getPosts(subreddit, type) {
  const url = 'https://www.reddit.com/r/' + subreddit + '/' + type + '.json';

  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log(json);
    })
    .catch(function (error) {
      console.log('There was an issue fetching the data. ' + response.error);
    });
}

getPosts('webdev', 'new');