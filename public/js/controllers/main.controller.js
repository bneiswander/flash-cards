app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
	$scope.flashCards;
	$scope.selectedCategory = 'all';
	$scope.categories = ['MongoDB','Express','Angular','Node']
	
	$scope.answerQuestion = function(answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			answer.correct ? ScoreFactory.answerCorrect(): ScoreFactory.answerIncorrect();
		}
	}

	$scope.getCategoryCards = function(category){
		FlashCardsFactory.getFlashCards(category).then(function(flashCards){
			$scope.selectedCategory = category;
			$scope.flashCards = flashCards;
			ScoreFactory.reset();
		});
	}

	FlashCardsFactory.getFlashCards().then(function(flashCards) {
		$scope.flashCards = flashCards;
	});
});
