app.directive('borderOnHover', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attr){
			elem.on('mouseenter', function(){
				elem.addClass('hover')
				console.log("mouse enter activated")
			})
			elem.on('mouseleave', function(){
				elem.removeClass('hover')
			})
		}
	}
})