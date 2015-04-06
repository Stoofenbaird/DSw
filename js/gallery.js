//This gallery is based on a Treehouse tutorial

//Provide a background div for the image display so the html page won't visually conflict with the images 
var $overlay = $('<div id="overlay"></div>'); 

//Assign the image tag as an argument in a function assigned to a variable
var $image = $("<img>"); 

//Use the jquery append method and the jquery overlay plugin with the image variable as the argument
$overlay.append($image);

//Now make the overlay the argument to append the image to the body of the document
$("body").append($overlay);

//Create a click function tied to the ul where the images are listed using event as an argument
$("#dsartwork a").click(function(event){
	
//don't let the click action take the user to a separate page with a single image, keep it loaded on the overlay
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  
//Display the selected image in overlay fashion
  $overlay.show();
  
});

//Create a new function and call the function when the overlay is clicked.
$overlay.click(function(){
//Close the image overlay and return to the gallery of thumbnail images,
  $overlay.hide();
});










