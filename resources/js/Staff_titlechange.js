title = document.title;


setInterval(function() {
	if (title == "MystiC Players") {
		document.title = "Welcome to Official MystiC";
	}

	else {
		document.title = "MystiC Players";
	}
}, 3000);