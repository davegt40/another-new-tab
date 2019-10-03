import * as helper from "./helper.js";

// play on load sounds
let audio = document.querySelector('#good-morning-dave').play();

// load reddit posts
helper.getPosts('webdev', 'hot');
helper.getPosts('salesforce', 'hot');
helper.getPosts('fantasyfootball', 'hot');