app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
	$scope.flashCards;
	$scope.selectedCategory = 'all';
	$scope.categories = ['MongoDB','Express','Angular','Node', 'View All']
	$scope.isLoading = true
	$scope.progress = 0;

	$scope.getCategoryCards = function(category){
		$scope.isLoading = true;
		$scope.progress = 100;  
		if(category === 'View All'){
			category = null;
		}
		FlashCardsFactory.getFlashCards(category).then(function(flashCards){
			$scope.selectedCategory = category;
			$scope.flashCards = flashCards;
			ScoreFactory.reset();
			$scope.isLoading = false;
			$scope.progress = 0;
		});
	}

	FlashCardsFactory.getFlashCards()
		.then(function(flashCards) {
			$scope.flashCards = flashCards;
			$scope.isLoading = false

	});
});
