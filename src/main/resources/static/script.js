/**
 * 
 */

var btn = document.getElementById("btn");
var swapiDiv = document.getElementById("info"); // will be used to dump the api data into the page
var pageCounter = 1;


btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
	
	ourRequest.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json"); 
	
	ourRequest.send();
	
	ourRequest.onload = function() {
		
		
		var ourData = JSON.parse(ourRequest.responseText);		
		renderHTML(ourData);
	};
	pageCounter++; 
});

function renderHTML(data) {
	for (var i = 0; i < data.complete.length; i++) {
		
		var htmlString = "<p> Name: " + data.complete[i].firstName + " " +
		" Innovation: " + data.complete[i].innovation + " Year: " + data.complete[i].year + 
		"</p>";
		
	swapiDiv.insertAdjacentHTML("beforeend", htmlString);
	}
}
