app.controller('NewCardController', function($scope, $http){

	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    	]
	}

	$scope.submitNewCard = function(newCard){
		console.log($scope.newCardForm)
      console.log(newCard);
      $http.post('/cards', newCard)
      .success(function(data, status, headers, config){
      	console.log('SUCCESS', data, status, headers)
      	$scope.newCard = {
    	question: null,
   		 category: null,
    	answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    	]
		}
		$scope.newCardForm.$setPristine()
		$scope.newCardForm.$setUntouched()
      })
      .error(function(data, status, headers, config){
      	console.log('ERROR', data, status, headers);
      })
	}
})