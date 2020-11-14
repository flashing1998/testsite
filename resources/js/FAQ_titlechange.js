title = document.title;


setInterval(function() {
	if (title == "MystiC Players") {
		document.title = "Welcome to Official MystiC";
	}

	else {
		document.title = "Frequently Asked Questions";
	}
}, 3000);