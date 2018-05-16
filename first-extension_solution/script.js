chrome.pageAction.onClicked.addListener(function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{file:  'main.js'
		});
	});
});