/* Navigation drop down */
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

/* help search dropdown */
function helpDropDownMenu() {
	document.getElementById('help_dropdown').classList.toggle('show_helpMenu');
}

window.onclick = function (e) {
	let myDropdown = document.getElementById('myDropdown');
	let help_drop = document.getElementById('help_dropdown');

	if (!e.target.matches('.dropbtn') && !e.target.matches('.dropbtn_helpMenu')) {
		if (myDropdown.classList.contains('show')) myDropdown.classList.remove('show');
		if (help_drop.classList.contains('show_helpMenu')) help_drop.classList.remove('show_helpMenu');
	}
	if (e.target.matches('.dropbtn_helpMenu') && myDropdown.classList.remove('show')) {
		myDropdown.classList.remove('show');
	}
	if (e.target.matches('.dropbtn') && help_drop.classList.contains('show_helpMenu')) {
		help_drop.classList.remove('show_helpMenu');
	}
};
