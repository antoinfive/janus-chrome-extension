// function getToken(localStorage) {
//   if(typeof(localStorage) == 'undefined'){
//     // alert("eagle down");
//   }
//   else {
//     var theGoods = localStorage.getItem('ember_simple_auth:session');
//     chrome.runtime.sendMessage({
//                    method: "POST",
//                    message: "sendZeTokens",
//                    url: "http://localhost:3000/users/sign_in",
//                    data: theGoods,
//                }, function(responseText) {
//                    console.log(responseText);
//             });
//
//     // alert("eagle out")
//   }
// }
//
