app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
	$scope.flashCards;
	$scope.selectedCategory = 'all';
	$scope.categories = ['MongoDB','Express','Angular','Node']
	$scope.isLoading = true

	$scope.getCategoryCards = function(category){
		$scope.isLoading = true;
		FlashCardsFactory.getFlashCards(category).then(function(flashCards){
			$scope.selectedCategory = category;
			$scope.flashCards = flashCards;
			ScoreFactory.reset();
			$scope.isLoading = false;
		});
	}

	FlashCardsFactory.getFlashCards().then(function(flashCards) {
		$scope.flashCards = flashCards;
		$scope.isLoading = false

	});
});
