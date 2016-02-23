var signedIn;
var currentUser;

signedIn = function(auth_token){
  if(auth_token==="undefined"){
    return false;
  }else {
    return true;
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
      if(activeTab !== "undefined") {
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
      } else {
        alert("the things are breaking");
      }
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
        xhttp.send(JSON.stringify({bookmark:
          {link: request.data,
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

//
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     alert("eagle approaching");
//     if( request.message === "sendZeTokens" ) {
//         var xhttp = new XMLHttpRequest();
//         xhttp.open(request.method, request.url, true);
//         xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         xhttp.send(JSON.stringify({user: request.data}));
//         alert('eagle landing');
//         xhttp.onload = function(){
//           callback(xhttp.responseText);
//         };
//         return true;
//     }
//   }
// );
