


$(document).ready(function(){

	$('#backgroundbutton').hide();
	$('#moretext').hide();

	$('#changePictureBtn').click(function(){
		$('.avatar').attr('src', 'img/harry.jpg');
		$(this).removeClass('button').text("Wait, that's not Sam!");
		$('.quotes').css('color', 'green').append('<img src="img/harry.jpg" />');
		$('.name').css('color', 'green');
		$('p:eq(1)').css('color','green');
		$('#backgroundbutton').show().text("Push To Change Background!");
	});

	$('#backgroundbutton').click(function(){
		$(this).removeClass('button').text('');
		$('body').css('background', "url('img/harry.jpg')");
		$('#moretext').show();
	})

	$('.avatar').hide().slideDown('2000').css('border','5px green dashed');
	$('.name').hide();
	$('h1.name').slideUp(300).delay(800).fadeIn(600);
	$('h1.name').css('color', 'red');
	$('p:eq(1)').css('color', 'blue');

	$(".name").mouseover(function(){
  		$(".name").css("background-color","yellow");
	});

	$('h3').hover(function(){
		$('h3').addClass('yellow');
	});

 

});
