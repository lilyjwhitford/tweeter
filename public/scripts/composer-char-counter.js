$(document).ready(function() {
  console.log("jQuery has loaded");

  $('#tweet-text').on('input', function() {
    let currentLength = $(this).val().length;
    let remainingCharacters = 140 - currentLength;
    $('.counter').text(remainingCharacters);

    if (remainingCharacters < 0) {
      $('.counter').addClass("max-count");
    } else {
      $('.counter').removeClass("max-count");
    }
  })
});