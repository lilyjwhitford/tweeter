/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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
            <p>${timeago.format(tweet.created_at)}</p>
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
      $(".tweets-container").prepend($tweet);
    }
  };

  // renderTweets(data);

  document.addEventListener('keydown', (event)=> {    
    console.log(event.key);
  });
  

  $(".tweet-form").on("submit", function(event) {
    // add event listener for submit and prevent default behavior
    event.preventDefault();
    // serialize form data
    let formData = $(this).serialize();
    let $text = $("#tweet-text").val();
    $("#tweet-text").val("");

    if ($text === "") {
      alert("Plese enter some text!");
    } else if ($text.length > 140) {
      alert("No one wants to hear all that!");
    } else {
    // send serialized data to the server
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: formData,
      success: function(response) {
        console.log(response);
        loadTweets();
      },
      error: function(error) {
        console.log("Error:", error);
        }
      });
    }
  });
  
  const loadTweets = function() {
  // make ajax GET request to /tweets
    $.ajax({
      method: "GET",
      url: "/tweets",
    }).then(renderTweets);
  };

  loadTweets();
  
});