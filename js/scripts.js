
function openNav() {

	var x =  document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menujs";
		document.getElementById("threeline-icon").innerHTML = "&Cross;";

	} else {
		x.className = "navigation";
		document.getElementById("threeline-icon").innerHTML = "&#9776;";

	}
}
document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

});