A simple Javascript/PHP DOM Scraper.

Useful for scraping elements off of a site (such as images). It returns an array of the elements from the site for whatever use you might have.

Dependencies: jQuery

Simple usage to scrape images (see demo):

<pre><code>
DOMScraper.scrapePage("http://news.google.com", "img", function(data){
	for(var i=0; i<data.length;i++) {
		$('body').append(data[i].el);
	}
});
</code></pre>