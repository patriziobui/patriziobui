
/**
 * Website start here
 */
$(document).ready(function($){ 
	if($(".main-nav > ul > li").length > 0) {
		
		$(".main-nav > ul > li").hover(function() {
			if($(this).hasClass("active")){
				$(this).addClass("active");
			}
			$(this).find("ul.sub-menu").show().animate({opacity: 1}, 400);
		},function() {
			$(this).find("ul.sub-menu").hide().animate({opacity: 0}, 200);
			if(!$(this).hasClass("active")){
				$(this).removeClass("active");
			}else{
				$(this).addClass("active");
			}
		});
		// Requried: Addtional styling elements
		$('nav ul li ul li:first-child').prepend('<li class="arrow"></li>');
		$('nav ul li:first-child').addClass('first');
		$('nav ul li:last-child').addClass('last');
		$('nav ul li ul').parent().append('<span class="dropdown"></span>').addClass('drop');
	}
	$(".flexslider-1").flexslider();
	$(".flexslider-2").flexslider({
		slideshow: true,
		animation: "slide",
		animationLoop: true
	});
	if($(".wrapper-items").length > 0){
		$(".wrapper-items .block-item:nth-child(3n + 1)").css("margin-left", 0);
	}
	if($("#user").length > 0){
		$("#user").click(function() {
			if($(".setting").hasClass( "show")){
				$(".setting").removeClass("show");
			}
			else{
				$(".setting").addClass("show");
			}
		});
	}
	$("select").change(function () {
        var str = "";
        str = $(this).find(":selected").text();
        $(this).next(".txt-select-2").text(str);
    }).trigger('change');
});
 $(document).click(function() {
	$(".layer").removeClass("active");
	$(".setting").removeClass("show");
});
$('.setting, .user').click(function(event){
	event.stopPropagation();
}); 



function tabBlock(id){
	$('#'+ id +' .tab:first').show();
	$('#'+ id +' ul.tab-ul li:first').addClass('active');
	$('#'+ id +' ul.tab-ul li a').click(function(){ 
		$('#'+ id +' ul.tab-ul li').removeClass('active');
		$(this).parent().addClass('active'); 
		var currentTab = $(this).attr('href'); 
		$('#'+ id +' .tab').hide();
		$(currentTab).show();
		if($('.scroll-pane').length > 0){
			$('.scroll-pane').jScrollPane();	
		}
		$(currentTab).find('.cnt-sub-tab:first').show();
		$(currentTab).find('.sub-tab a:first').addClass('selected');
		return false;
	});
}
function openPopup(id){
	$("#"+id).fadeIn(100);	 
	/*code for play game*/
	var h = $("#"+id+" > .popup").height();
	$("#"+id+" > .popup").css("margin-top", -h/2);
	if($(".scroll-pane").length > 0){
		$('.scroll-pane').jScrollPane();	
	}
	 
}
function closePopup(id){
	$("#"+id).fadeOut(100);	
	//$("#header > .closepp").remove();
	
	
}