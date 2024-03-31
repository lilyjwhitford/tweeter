
const createTweetElement = function(tweet) {
  // escape function to prevent XSS attack
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const safeHTML = `<p>${escape(tweet.content.text)}</p>`;

  const $tweet = $(`
  <article class="tweet">
      <header>
        <div class="avatar">
          <img src="${tweet.user.avatars}">
          <p class="name">${tweet.user.name}</p>
        </div>
        <p class="username"><b>${tweet.user.handle}</b></p>
      </header>
      <div class="tweet-text">${safeHTML}</div>
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

const submitTweet = function(event) {
  // add event listener for submit and prevent default behavior
  event.preventDefault();
  // serialize form data
  let formData = $(this).serialize();
  let $text = $("#tweet-text").val();
  $("#tweet-text").val("");

  $(".error-msg").slideUp(); // ensure all error messages are hidden
 
  if ($text.length === 0) {
    $("#empty-error").slideDown();
  } else if ($text.length > 140) {
    $("#length-error").slideDown();
  } else {
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: formData,
      success: function(response) {
        console.log(response);
        loadTweets();
        $(".counter").text(140);
      },
      error: function(error) {
        console.log("Error fetching data:", error);
      }
    });
  }
};

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweets-container").prepend($tweet);
  }
};

const loadTweets = function() {
  // make ajax GET request to /tweets
  $.ajax({
    method: "GET",
    url: "/tweets",
  }).then(renderTweets);
};

const navScroll = function() {
  if ($(this).scrollTop() > 120) {
    $("nav").addClass("nav-scrolled");
  } else {
    $("nav").removeClass("nav-scrolled");
  }
};
