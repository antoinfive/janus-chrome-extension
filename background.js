// var ID;
// alert("NIGGA");
// debugger;
//  function getCookies(domain, name)
//  {
//      chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
//          ID = cookie.value;
//          showId();
//      });
//  }
//
//  function showId() {
//      alert(ID);
//  }
//
//  getCookies("http://localhost:3000", "id");
//
//
//
// // chrome.browserAction.onClicked.addListener(function(tab) {
// //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// //     var activeTab = tabs[0];
// //     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
// //   });
// // });
// //
// // chrome.runtime.onMessage.addListener(
// //   function(request, sender, sendResponse) {
// //     if( request.action === "xhttp" ) {
// //         var title = "bookmark from " + request.data;
// //         var xhttp = new XMLHttpRequest();
// //         var method = "POST";
// //         xhttp.open(method, request.url, true);
// //         xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //         xhttp.send(JSON.stringify({bookmark:{link: request.data, title: title}}));
// //         xhttp.onload = function(){
// //           callback(xhttp.responseText);
// //         };
// //         return true;
// //     }
// //   }
// // );
// function load() {
//     var channel = "";
//     var keywords = "ember_simple_auth:session";
//     chrome.storage.local.get('channels', function (result) {
//       alert(JSON.stringify(result));
//         channels = result.channels;
//         alert(result.channels);
//         $("#channels").val(channels);
//     });
//
//
//     chrome.storage.local.get('keywords', function (result) {
//       alert(JSON.stringify(thenextone + result));
//         keywords = result.keywords;
//         alert(result.keywords);
//         $("#keywords").val(keywords);
//     });
//
// }
//
// alert("something broke in background.js");
// // chrome.runtime.onMessage.addListener(function(request, sender, sendReponse){
// //   if (request.method == "getStatus"){
// //     sendReponse({status: localStorage.status});
// //   }
// //     else {
// //       sendReponse({status: "WHAT"});
// //
// //   }
// // });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "sendZeTokens" ) {
        var xhttp = new XMLHttpRequest();
        xhttp.open(request.method, request.url, true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({user:{auth_token: request.data}}));
        xhttp.onload = function(){
          callback(xhttp.responseText);
        };
        return true;
    }
  }
);
