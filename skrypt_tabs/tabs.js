// JavaScript source code
//$(".tabs li a:first").addClass("active");
document.getElementById("tab1").classList.add("active");
document.getElementById("#panel2").style.display = "none";
document.getElementById("#panel3").style.display = "none";
document.getElementById("#panel4").style.display = "none";

function changeTab(name) {
	//let panel = $(".active").attr("href");
	let panel = document.getElementsByClassName("active")[0];
	document.getElementById(panel.getAttribute("href")).style.display = "none";
	panel.classList.remove("active");
	document.getElementById(name).classList.add("active");
	let panelName = document.getElementById(name).getAttribute("href");
	document.getElementById(panelName).style.display = "block";

	switch (color) {
		case "White": changeColor("#cccccc", "#e6e6e6", "#b3b3b3"); break;
		case "Red": changeColor("#ff9999", "#ffcccc", "#ff6666"); break;
		case "Rose": changeColor("#ffb3e6", "#ffe6f7", "#ff80d5"); break;
		case "Green": changeColor("#9fdf9f", "#c6ecc6", "#79d279"); break;
		case "Purple": changeColor("#eb99ff", "#f5ccff", "#e066ff"); break;
		default: changeColor("#cccccc", "#e6e6e6", "#b3b3b3");
	}
}