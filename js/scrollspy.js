const hash = {};

$.fn.inViewItem = function () {
	let stack = [];
    let currentY = window.scrollY;
    $.each(hash, function(select, value) {
       	if (currentY >= value) {
    		stack.push(select);
    		return true;
    	}
    	else {
    		return false;
    	}
    });
    return(stack.pop());
};


$(".navbar-nav .nav-link").on("click", function(event){
	  event.preventDefault();
      $(".navbar .active").removeClass("active");
      $(this).addClass("active");
      let topValue = hash[$(this)[0].hash];
      window.scrollTo({ top: topValue, behavior: "smooth"});
 });

$(".navbar-brand").on("click", function(event){
	  event.preventDefault();
      $(".navbar .active").removeClass("active");
      window.scrollTo({ top: 0, behavior: "smooth"});
 });

$(function() {
	const navHeight = $('.navbar').height();
	const items = $(".navbar-nav .nav-link");

	$.each(items, function() {
		hash[$(this)[0].hash] = $($(this)[0].hash).offset().top - navHeight;
	})

	$( window ).scroll(function() {
		let selectedItem = $('body').inViewItem();
		$(".navbar .active").removeClass("active");
		$(".navbar .nav-link").filter("[href='"+selectedItem+"']").addClass("active");
	});
})



