// function load(url) {
//     // display loading image here...
//     document.getElementById('boxbg').visible = true;
//     // request your data...
//     var req = new XMLHttpRequest();
//     req.open("POST", url, true);

//     req.onreadystatechange = function () {
//         if (req.readyState == 4 && req.status == 200) {
//             // content is loaded...hide the gif and display the content...
//             if (req.responseText) {
//                 document.getElementById('MainVid').innerHTML = req.responseText;
//                 document.getElementById('boxbg').visible = false;
//             }
//         }
//     };
//     request.send(vars);
// }

// loaDer = document.querySelector("#boxbg");
// navBAR = document.querySelector(".Navigation");
// firstPage = document.querySelector("#Start");
// secondPage = document.querySelector("#secondpage");
// fooTer = document.querySelector("#End");
// loaDer.style.display = "block";
// function loadingHtml (index.html) {
//     var req = new XMLHttpRequest();
//     req.open("POST", url, true);
//     req.onreadystatechange = function () {
//         if (req.readyState == 4 && req.status == 200) {
//             loaDer.style.display = "none";
//             navBAR.style.display = "block";
//             firstPage.style.display = "block";
//             secondPage.style.display = "block";
//             fooTer.style.display = "block";
//         };

//         else {
//             loaDer.style.display = "block";
//             navBAR.style.display = "none";
//             firstPage.style.display = "none";
//             secondPage.style.display = "none";
//             fooTer.style.display = "nones";
//         }
//     }
//     request.send(vars);
// }


// $(document).ready(function() { // makes sure the whole site is loaded 
//   console.log("ready!");
//   $('#boxbg').fadeOut('slow');
// });
$( document ).ready(function(){
    $( window ).on( "load", function() { // makes sure the whole site is loaded 
      console.log("ready!");
      document.getElementById("boxbg").style.visibility = "hidden";
    });
});



