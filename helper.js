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
      postsList.appendChild(createPostElement(item));
    }
  } else {
    console.log('No data');
  }
}

/**
 * Create a node element representing a reddit post
 * 
 * @param {object} item
 * @return {node} html node representing a reddit post
 */
function createPostElement(item) {
  let container = document.createElement('div');
  container.setAttribute('class', 'c-reddit-post');

  const link = document.createElement('a');
  link.setAttribute('href', item.data.url);
  link.setAttribute('alt', item.data.title);

  const image = document.createElement('img');

  // thumbnail image may not always be available
  let imageUrl = (item.data.thumbnail === 'self') ? './images/code-solid.svg' : item.data.thumbnail;
  image.setAttribute('src', imageUrl);
  image.setAttribute('class', 'c-reddit-post__image')

  const paragraph = document.createElement('p');
  paragraph.innerText = item.data.title;

  link.appendChild(image);
  link.appendChild(paragraph);
  container.appendChild(link);

  return container;
}