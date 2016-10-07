


var $pictures = ["bluegrey.jpg", "limegrey.jpg","mintgrey.jpg","mustardgrey.jpg","purplegrey.jpg","redblack.jpg","whiteblack.jpg","whitegrey.jpg"]
 
var $nextLink = $('#nextLink')
var $prevLink = $('#prevLink')
var $mainPicture = $('#mainPicture')
 
var currentIndex = 0
 
var $addToCartButton = $('#addToCart')

$nextLink.click(function() {
  if (currentIndex < $pictures.length-1){
    currentIndex = currentIndex + 1
  }
                
  $mainPicture.attr("src", "images/" + $pictures[currentIndex])
 
})
 
$prevLink.click(function () {
  if (currentIndex > 0){
    currentIndex = currentIndex - 1
  }
 
  $mainPicture.attr("src", "images/" + $pictures[currentIndex])
})

$addToCartButton.click(function() {
	$(".panel").toggle();
	//$(this).toggleClass("active");
	return false;
 
})

$('#cartButton').click(function() {
	$(".panel").toggle();
	//$(this).toggleClass("active");
	return false;
 
})



$('#cancel').click(function() {
	$(".panel").toggle();
	//$(this).toggleClass("active");
	return false;
 
})

/*
//Define Variables
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]
var $citySelect = $("#city-type")
var $body = $("body")

//ADD ALL CITIES TO THE SELECT VIA FOR LOOP
	cities.forEach(function(value){

		$citySelect.append("<option>" + value + "</option>")

	})

  1. DETECT USER INPUT (SELECT 1 OPTION) VIA CHANGE EVENT HANDLER
 	2. STORE INPUT INTO VARIABLE
 	3. CLEAR EXISTING CLASSES SET TO BODY
 	4. SWITCH BASED ON INPUT TO CHOOSE BACKGROUND IMAGE 
	5. SET BACKGROUND IMAGE BY SETTING CSS CLASS USING JS

	$citySelect.change(function(){

		var selectedCity = $citySelect.val()
		$body.attr("class","")

		switch (selectedCity){
			case "NYC":
				$body.addClass("nyc")
			break;

			case "SF":
				$body.addClass("sf")
			break;

			case "LA":
				$body.addClass("la")
			break;

			case "ATX":
				$body.addClass("austin")
			break;

			case "SYD":
				$body.addClass("sydney")
			break;

		}	

	})
*/


	