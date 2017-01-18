var tweetLink = 'https://twitter.com/intent/tweet?text=';
var quoteUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/';

function getQuote() {
	$.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
		type: 'GET',
		datatype: 'json',
		success: function(data) {
			createTweet(JSON.parse(data));
		},
		error: function(err) { 
			alert(err);
		},
		beforeSend: function(xhr) {
			xhr.setRequestHeader("X-Mashape-Authorization", "2W1js31pYJmshjhSeK7bv8Sb4SIgp1HPxkDjsnxBZqr7ZhGKZ2");
		}
	});
}

function createTweet(input) {
	if (!input.author.length) {
		input.author = 'Unknow author';
	}

	var tweetText = 'Quote of the day -' + input.quote + ' Author: ' + input.author;

	if (tweetText.lenght > 140) {
			getQuote();
	} else {
			var tweet = tweetLink + encodeURIComponent(tweetText); 
			$('.quote').text(input.quote);
			$('.author').text('Author: ' + input.author);
			$('.tweet').attr('href', tweet);
		}
}

$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});