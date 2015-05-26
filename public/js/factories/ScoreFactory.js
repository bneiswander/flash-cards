app.factory('ScoreFactory', function(){
    return{
        correct: 0,
        incorrect: 0,
        answerCorrect: function(){
        	this.correct++
        },
        answerIncorrect: function(){
        	this.incorrect++
        },
        reset: function(){
        	this.correct = 0;
        	this.incorrect = 0;
        }

    }
})