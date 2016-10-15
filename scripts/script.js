

var elem = "<div style=display: inline-block; border: 0px solid white;'><img style='width:75px;height:75px;margin: 0px;padding-top: 20px' src='images/blackgrey.jpg'></div><div style='display: inline-block; border: 0px solid white;'><div style=' border: 0px solid white;'>Soul Lace</div><div style='display: inline-block; border: 1px solid white;'><div style='display: inline-block; border: 1px solid white;'>&nbsp-&nbsp</div><div style='display: inline-block; border: 1px solid white;'>&nbsp&nbsp1&nbsp&nbsp</div><div style='display: inline-block; border: 1px solid white;'>&nbsp+&nbsp</div></div><div style='display: inline-block; border: 0px solid white;'>&nbsp&nbsp&nbsp$19.00</div></div><div style='border: 0px solid white;'>&nbsp</div>"


var $pictures = ["bluegrey.jpg", "blackgrey.jpg","limegrey.jpg","mintgrey.jpg","purplegrey.jpg","mustardgrey.jpg","redblack.jpg","whiteblack.jpg","whitegrey.jpg"]
var $names = ["Blue", "Black","Olive","Teal","Purple","Orange","Red","White","Gray"]
var $prices = [10,20,30,40,50,60,70,80,90]
var quantities = [0,0,0,0,0,0,0,0,0]
 
var $nextLink = $('#nextLink')
var $prevLink = $('#prevLink')
var $mainPicture = $('#mainPicture')
var $colorButtons = $('.colored') 
var $name = $('#name')
var $price = $('#price')
var $items = $('#items')

var totalPrice = 0;

var $boxes = $('.box')

$colorButtons.click(function(){

	var currentIndex2 = $('.colored').index(this);
	// alert(currentIndex2)
	$mainPicture.attr("src", "images/" + $pictures[currentIndex2]);
	$name.html($names[currentIndex2]);
	$price.html($prices[currentIndex2]);
	return false;
})

var currentIndex = 0
 
var $addToCartButton = $('#addToCart')

$nextLink.click(function() {
  if (currentIndex < $pictures.length-1){
    currentIndex = currentIndex + 1
  }
                
  $mainPicture.attr("src", "images/" + $pictures[currentIndex])
  return false;
})
 
$prevLink.click(function () {
  if (currentIndex > 0){
    currentIndex = currentIndex - 1
  }
 
  $mainPicture.attr("src", "images/" + $pictures[currentIndex])
  return false;
})

$boxes.hover(function(){
	//alert();

	var $second = $(".second");
	var currentIndex3 = 0;

	if ($(this).hasClass("box1")){
		//alert("he");

			$second.toggleClass("second1");
	}

	if ($(this).hasClass("box2")){
		//alert("he");
			

			$second.toggleClass("second2");
	}

	if ($(this).hasClass("box3")){
		//alert("he");
			

			$second.toggleClass("second3");
	}

	if ($(this).hasClass("box4")){
		//alert("he");
			

			$second.toggleClass("second4");
	}

	if ($(this).hasClass("box5")){
		//alert("he");
			

			$second.toggleClass("second5");
	}

	if ($(this).hasClass("box6")){
		//alert("he");
		

			$second.toggleClass("second6");
	}

	// $second.css("background", "url(images/" + $pictures[currentIndex3] + ") no-repeat 100% 1000px");



})

$addToCartButton.click(function() {

	/*

		Add Current Item to panel via div
		inside div, add an image
		image float left

	
		check main image
		var mainimage

		i


	*/


	var link = $mainPicture.attr("src"); 
	var index;

	switch (link){
			case "images/bluegrey.jpg":
				index = 0;
			break;

			case "images/blackgrey.jpg":
				index = 1;
			break;

			case "images/limegrey.jpg":
				index = 2;
			break;

			case "images/mintgrey.jpg":
				index = 3;
			break;

			case "images/purplegrey.jpg":
				index = 4;
			break;

			case "images/mustardgrey.jpg":
				index = 5;
			break;

			case "images/redblack.jpg":
				index = 6;
			break;

			case "images/whiteblack.jpg":
				index = 7;
			break;

			case "images/whitegrey.jpg":
				index = 8;
			break;

	}

	console.log(index);


	if (quantities[index]==0){
		$("ul#items li:eq(" +index + ")").toggle();

	}

	quantities[index]++;

	$("ul#items .listName:eq(" +index + ")").html($names[index] + " ");

	totalPrice = +totalPrice + $prices[index]
	
	$('.quantityInfo:eq(' + index + ') ').html(quantities[index])
	$("#panelTotalPrice").html(totalPrice);


	$('.priceBoxSpan:eq(' + index + ') ').html($prices[index]);

	$(".panel").toggleClass('open');
	//$(this).toggleClass("active");
	return false;
 
})

$(".plusButton").click(function(){
	var currentIndex2 = $('.plusButton').index(this);
	
	quantities[currentIndex2] = quantities[currentIndex2] - 1
	$('.quantityInfo:eq(' + currentIndex2 + ') ').html(quantities[currentIndex2])

	if (quantities[currentIndex2]==0){
		$("ul#items li:eq(" + currentIndex2 + ")").toggle();

	}else{

		
		
	}

	totalPrice = +totalPrice - $prices[currentIndex2]
	$("#panelTotalPrice").html(totalPrice);

	console.log(currentIndex2)
})

$(".minusButton").click(function(){
	var currentIndex2 = $('.minusButton').index(this);
	totalPrice = +totalPrice + $prices[currentIndex2]
	
	quantities[currentIndex2] = quantities[currentIndex2] + 1
	$('.quantityInfo:eq(' + currentIndex2 + ') ').html(quantities[currentIndex2])
	$("#panelTotalPrice").html(totalPrice);
	console.log(currentIndex2)
})


$('#cartButton').click(function() {
	$(".panel").toggleClass('open');

	//$(this).toggleClass("active");
	return false;
 
})



$('#cancel').click(function() {
	$(".panel").toggleClass('open');
	//$(this).toggleClass("active");
	return false;
 
})


var $saveformBtn = $("#saveForm");
var $loginForm = $("#loginForm");
var $output = $('#output');

$saveformBtn.click(function(){
	

	var dataToSubmit = $loginForm.serialize();
	//alert(dataToSubmit);

	$.post("https://testsite2016123.000webhostapp.com/", dataToSubmit, function(data2) {

		
        //console.log(data2);           
       	
       	switch (data2){

       		case "1":
       		$output.html("Enter your username or password");
       		$output.removeClass("green");
       		$output.addClass("red");
       		break;

       		case "3":
       		$output.html("Invalid username or password");
       		$output.removeClass("green");
       		$output.addClass("red");
       		break;

       		case "4":
       		$output.html("Invalid username or password");
       		$output.removeClass("green");
       		$output.addClass("red");
       		break;

       		case "5":
       		$output.html("Login Successful");
       		$output.removeClass("red");
       		$output.addClass("green");
       		break;


       		default:
       		$output.html("");
       		$output.removeClass("red");
       		$output.removeClass("green");
       		break;

       	}

       

        //alert(data2);
              
        }, "html" );


})




	