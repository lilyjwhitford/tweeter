/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
          <header>
            <div class="avatar">
              <img src="${tweet.user.avatars}">
              <p class="name">${tweet.user.name}</p>
            </div>
            <p class="username"><b>${tweet.user.handle}</b></p>
          </header>
          <div class="tweet-text">
            <p>${tweet.content.text}</p>
          </div>
          <hr>
          <footer>
            <p>508 years ago</p>
            <div class="icons">
              <div class="icon"><i class="fa-solid fa-flag"></i></div>
              <div class="icon"><i class="fa-solid fa-retweet"></i></div>
              <div class="icon"><i class="fa-solid fa-heart"></i></div>
            </div>
          </footer>
        </article>
    `);
    return $tweet;
  };

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').prepend($tweet);
    }
  };

  renderTweets(data);
});