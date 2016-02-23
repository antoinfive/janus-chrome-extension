// This callback function is called when the content script has been
// // injected and returned its results
// function onPageDetailsReceived(pageDetails)  {
//     document.getElementById('email').value = pageDetails.email;
//     document.getElementById('password').value = pageDetails.password;
// }
//
// // var statusDisplay = null;
// //
// // function signIn() {
// //     event.preventDefault();
// //     var postUrl = 'http://localhost:3000/users/sign_in';
// //
// //     var xhr = new XMLHttpRequest();
// //     xhr.open('POST', postUrl, true);
// //
// //     // var email = encodeURIComponent(document.getElementById('email').value);
// //     // var password = encodeURIComponent(document.getElementById('password').value);
// //
// //     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //
// //     xhr.onreadystatechange = function() {
// //         if (xhr.readyState == 4) {
// //             statusDisplay.innerHTML = '';
// //             if (xhr.status == 200) {
// //                 statusDisplay.innerHTML = 'Saved!';
// //                 window.setTimeout(window.close, 1000);
// //             } else {
// //                 statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
// //             }
// //         }
// //     };
// //
// //     // xhr.send();
// //     statusDisplay.innerHTML = 'Saving...';
// // }
//
// // // // When the popup HTML has loaded
// window.addEventListener('load', function(evt) {
//     // Cache a reference to the status display SPAN
//     statusDisplay = document.getElementById('status-display');
//     // Handle the bookmark form submit event with our addBookmark function
//     document.getElementById('addbookmark').addEventListener('submit', addBookmark);
//     // Get the event page
//     chrome.runtime.getBackgroundPage(function(eventPage) {
//         // Call the getPageInfo function in the event page, passing in
//         // our onPageDetailsReceived function as the callback. This injects
//         // content.js into the current tab's HTML
//         eventPage.getPageDetails(onPageDetailsReceived);
//     });
// });
