chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if( request.message === "clicked_browser_action" ) {
      // var firstHref = $("a[href^='http']").eq(0).attr("href");
      var theGoods = localStorage.getItem('ember_simple_auth:session');
      // console.log(firstHref);
      if(sender !== undefined){
      chrome.runtime.sendMessage({
               method: "POST",
               action: "xhttp",
               url: "http://localhost:3000/api/v1/bookmarks/chrome",
               data: sender,
               token: theGoods.match(/(?:"token":")(\w+)(?:","email")/)[1]
           }, function(responseText) {
               console.log(responseText);
        });
      } else {
        alert("the url you tried to save was invalid, please try again.");
      }
    }
  }
);
