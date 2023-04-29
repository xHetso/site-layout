$(function() {

	new WOW().init();

	/*Menu mobile open*/

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.menu_top').slideDown(300);
		}else{
			$('.menu_top').slideUp(300);
		}
	});
	/*Menu mobile open*/

	/*reviews tabs*/ 
	$('.nav_rev > div').click(function(){
		const revID = $(this).data('revid');

		$('.nav_rev > div').not(this).removeClass('active');
		$(this).addClass('active');

		$('.item_rev').not(revID).removeClass('active');
		$(revID).addClass('active');
	});
	/*reviews tabs*/ 

});