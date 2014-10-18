(function(window,$){
	htmlnav()
	function htmlnav(){
		$('body').on('click',function(e){
			$('.nav_top_ul a').parents($('.nav_top_ul li')).siblings().find('ol').removeClass('dis');
		})
		/*点击头部的a*/
		$('.nav_top_ul a').on('click',function(e){
			$(this).next().toggleClass('dis');
			e.stopPropagation();
		})
		$('.nav_middle ul li').on('mouseover',function(){
			console.log($(this).size());
		})
	}
})(window,jQuery)