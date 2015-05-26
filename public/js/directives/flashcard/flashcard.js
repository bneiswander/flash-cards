app.directive('flashCard', ['ScoreFactory', function(ScoreFactory){
	return {
		restrict: 'E',
		scope: {
			card: '='
		},
		templateUrl: 'js/directives/flashcard/flashcard.html',
		link: function(scope, el, attr){
			scope.answerQuestion = function(answer, card) {
				if (!card.answered) {
					card.answered = true;
					card.answeredCorrectly = answer.correct;
					answer.correct ? ScoreFactory.answerCorrect(): ScoreFactory.answerIncorrect();
				}
			}

		}
	}
}])