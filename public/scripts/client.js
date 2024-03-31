/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  loadTweets();
  
  $(".tweet-form").on("submit", submitTweet);

  $(window).on("scroll", navScroll);

});