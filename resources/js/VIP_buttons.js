gotoServer = document.getElementById("gotoServer");
gotoServer.addEventListener("click", function (){
  document.getElementById("Serverpage").scrollIntoView();
});

gotoServerVIP = document.getElementById("gotoServerVIP");
gotoServerVIP.addEventListener("click", function (){
  document.getElementById("VIPSessionID").scrollIntoView();
});


// gtoS = document.getElementById("gotoSP");
// gtoS.addEventListener("click", function (){
// 	document.getElementById("secondpage").scrollIntoView();
// });

// homePage1 = document.getElementById("HomePage");
// homePage1.addEventListener("click", function (){
// 	document.getElementById("Start").scrollIntoView();
// });

contactUs = document.getElementById("ContactUS");
contactUs.addEventListener("click", function (){
	document.getElementById("End").scrollIntoView();
});

//ScrollUp Button Function
mybutton = document.getElementById("scrollUp");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction);

//Navbar add class <!-- navbar-fixed-top -->
// var navBar = document.getElementsByClassName("navbar")[0];
// function navFunction () {
// 	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     	navBar.classList.add("navbar-fixed-top");
//   	} 
//  	 else {
//     	navBar.classList.remove("navbar-fixed-top");
//   }
// }
// window.onscroll = function() {navFunction()};
