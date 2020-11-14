gtoSP2 = document.getElementById("gtoSP2");
gtoSP2.addEventListener("click", function (){
  document.getElementById("secondpage").scrollIntoView();
});
gtoSP2.addEventListener("mouseover", function(){
  for (i=0; i<3; i++){
    document.getElementsByClassName("streamer")[i].classList.add("streamerglow");
  };
});
gtoSP2.addEventListener("mouseout", function(){
  for (i=0; i<3; i++){
    document.getElementsByClassName("streamer")[i].classList.remove("streamerglow");
  };
});

gtoS = document.getElementById("gotoSP");
gtoS.addEventListener("click", function (){
	document.getElementById("secondpage").scrollIntoView();
});

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
