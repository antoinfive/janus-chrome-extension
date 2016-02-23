// var ID;
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
//  getCookies("http://localhost:4200", "id");



// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var firstHref = $("a[href^='http']").eq(0).attr("href");
//
//       console.log(firstHref);
//       chrome.runtime.sendMessage({
//                method: "POST",
//                action: "xhttp",
//                url: "http://localhost:3000/api/v1/bookmarks",
//                data: firstHref
//            }, function(responseText) {
//                console.log(responseText);
//         });
//     }
//   }
// )
