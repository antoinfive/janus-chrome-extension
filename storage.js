// chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
//   alert(JSON.stringify(response));
//   console.log(response.status);
// });
//


function getToken(localStorage) {
  if(typeof(localStorage) == 'undefined'){
    alert("NIGGA NO");
  }
  else {
    var theGoods = localStorage.getItem('ember_simple_auth:session');
    chrome.runtime.sendMessage({
                   method: "POST",
                   message: "sendZeTokens",
                   url: "http://localhost:3000/api/v1/sign_in",
                   data: theGoods
               }, function(responseText) {
                   console.log(responseText);
            });
    alert("NIGGA WE OUT");
  }
}

getToken(localStorage);
