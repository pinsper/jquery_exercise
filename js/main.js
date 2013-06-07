fartscroll();

$(document).ready(function(){

	$('#changePictureBtn').click(function(){
		$('.avatar').attr('src', 'img/harry.jpg');
		$(this).removeClass('button').text("Wait, that's not Sam!");
		$('.quotes').css('color', 'green').append('<img src="img/harry.jpg" />');
	});

	$('.avatar').hide().slideDown(500).css('border','5px green dashed');

	// Plugins

	// Farting sounds
	 

});