/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const $tweet = $(`<article class="tweet">Hello world</article>`);

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
          <header>
            <div class="avatar">
              <img src="${user.avatars}">
              <p class="name">${user.name}</p>
            </div>
            <p class="username"><b>${user.handle}</b></p>
          </header>
          <div class="tweet-text">
            <p>${user.content}</p>
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
    // loop through tweets 
    for (let tweet of tweets) {
      const tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

});