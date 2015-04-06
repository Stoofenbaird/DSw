// JavaScript Document

//This file has one jQuery funct for activating the small screen drop down menu and two jQuery functions to show and hide current exhibition information when requested.

//func for drop down menu
//The second line of the function listens for a click event in the alt menu div and when a click happens loads the html for the drop down menu into that div
function menuBox() {
	$('#altMenu').load('DSaltMenu.html');
}

//func for optional display of current exhibit information
//The first func listens for a click event in the exhibit div and loads the DSshow html information into that div.  It then listens for the click event of the hide button (added with the DSshow html).  If that button is clicked the DSshow html text is hidden and the closeExh func is called.
function displayExhibit() {
	$('#exhibit').load('DSshow.html');
	$('#exhibits').hide();
}

//This func resets the exhibit div to its original text and button by loading the DSreset html into the exhibit div. The reset text is identical to the original text and button that loads with the page.

function closeExh() {
	$('#exhibit').load('DSreset.html');
		
}
