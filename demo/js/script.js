var getQueryStrings = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) {
        return 0;
    }
    return results[1] || 0;
};

$(document).ready(function() {
	var url = getQueryStrings('url'),
		el = getQueryStrings('el');

	DOMScraper.scrapePage(url, el, function(data){
		for(var i=0; i<data.length;i++) {
			$('body').append(data[i].el);
		}
	});
});