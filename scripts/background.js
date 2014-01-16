///////////////////////////////////////////////////////////////////////////////
// Setup
///////////////////////////////////////////////////////////////////////////////
var Version = "0.1.0";


///////////////////////////////////////////////////////////////////////////////
// Hook
///////////////////////////////////////////////////////////////////////////////
chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		id: "global",
		title: "OneUp [Coinbase]",
		contexts: ["selection", "link"]
	});
});


///////////////////////////////////////////////////////////////////////////////
// Monitor
///////////////////////////////////////////////////////////////////////////////
chrome.contextMenus.onClicked.addListener(function (info) {
	
});