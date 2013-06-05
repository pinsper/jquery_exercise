$(document).ready(function(){

	// $('.quotes p').addClass('highlighted');

	// 

	$('#changePictureBtn').click(function(){
		$('.avatar').attr('src', 'img/harry.jpg');
		$(this).removeClass('button').text("Wait, that's not Sam!");
	});

});
