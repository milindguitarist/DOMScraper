var DOMScraper = {
	scrapePage: function(url, element, callback) {
		url = 'retrieveDOM.php?url=' + url;

		$.ajax({
			url: url,
			type: 'get',
			cache: false,
			crossDomain: true,
			success: function(data) {
				var scrapedElements = [];

				$(data).find(element).each(function(index,foundEl) {
					foundEl.style.width ='';
					foundEl.style.height ='';

					var foundElement = {
						el: foundEl
					};

					scrapedElements.push(foundElement);
				});

				callback(scrapedElements);
			},
			error: function(error, e) {
				console.log(e);
			}
		});
	}
};