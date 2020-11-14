title = document.title;


setInterval(function() {
	if (title == "MystiC Players") {
		document.title = "Welcome to Official MystiC";
	}

	else {
		document.title = "Buy VIP";
	}
}, 3000);