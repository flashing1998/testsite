title = document.title;


setInterval(function() {
	if (title == "MystiC Players") {
		document.title = "Welcome to Official MystiC";
	}

	else {
		document.title = "Privacy Policy";
	}
}, 3000);