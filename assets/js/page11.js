$(function(){
	$('#gif-upload').hide();
	
	$("#menu-trigger").click(function(){
		
		$("#creative-type-list").slideToggle(1000);
		$('.creative-size , .creative-size2').css('cursor', 'pointer');	
});

var selectCreativeType = function(element, showIsTrue){
	
	$('#creative-type-input').val($(element).text());
	$('#creative-type-list').slideUp(500)
	
	if(showIsTrue) 
		$('#gif-upload').show();
	else 
		$('#gif-upload').hide();
};

$('.creative-size').on('click', function(){
	
	selectCreativeType(this, true);	
});

$('.creative-size2').on('click', function(){
		
	selectCreativeType(this, false);	
});});


/*
$('.creative-size').on('click', function(){
	
	$('#gif-upload').show();
	
	$("#creative-type-list").slideUp(500);
	
	$('#creative-type-input').val($(this).text());
});

$('.creative-size2').on('click', function(){
	
	$("#creative-type-list").slideUp(500);
	
	var value = $(this).text();
	
	$('#gif-upload').hide();
	
	$('#creative-type-input').val(value);
	
});  */
