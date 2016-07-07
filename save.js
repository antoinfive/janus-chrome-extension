chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    var theGoods = localStorage.getItem('ember_simple_auth:session');
    if( request.message === "clicked_browser_action") {
      if(sender !== undefined){
      chrome.runtime.sendMessage({
               method: "POST",
               action: "xhttp",
               url: "http://janus-api.herokuapp.com/api/v1/bookmarks/chrome",
               data: sender,
              //  token: theGoods.match(/(?:"token":")(\w+)(?:","email")/)[1]
           }, function(responseText) {
               console.log(responseText);
        });
      } else {
        alert("the url you tried to save was invalid, please try again.");
      }
    }
  }
);
