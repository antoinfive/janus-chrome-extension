
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}, function(response){
      var lastError = chrome.runtime.lastError;
        if(lastError){
          console.log(lastError.message);
        } else {
          console.log(response);
      }
    });
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.action === "xhttp" ) {
        var title = "Bookmark saved from JanusChrome: " + sender.url;
        var xhttp = new XMLHttpRequest();
        var method = "POST";
        xhttp.open(method, request.url, true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({bookmark:
          {link: sender.url,
            title: title},
          user:{token: request.token}
        }));
        xhttp.onload = function(){
          callback(xhttp.responseText);
        };
        return true;
    }
  }
);
