(function(window,$){

	$('.nav_top_ul li>a').on('click',function(){
		$(this).next().addClass("on")sidlings().removeClass('on');
		/*console.log($())
		$(this).parents($('#nav_top_ul')).find('ol').removeClass('off');
		$(this).next().addClass('on');*/
		/*$(this).toggle(
		  function () {
		    $(this).parent().find('ol').css({
		    	'display':"block",
		    })
		  },
		  function () {
		    $(this).parent().find('ol').css({
		    	'display':"none",
		    })
		  }
		);*/
	})
})(window,jQuery)
/*$('.top li span').on('click',function(){
	$(this).parents($('.top')).find('ol').removeClass('dis');
	$(this).next().addClass('dis');

})
*/