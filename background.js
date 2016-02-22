chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.action === "xhttp" ) {
        var title = "bookmark from " + request.data;
        var xhttp = new XMLHttpRequest();
        var method = "POST";
        xhttp.open(method, request.url, true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({bookmark:{link: request.data, title: title}}));
        xhttp.onload = function(){
          callback(xhttp.responseText);
        };
        return true;
    }
  }
);
