app.factory('FlashCardsFactory', function($http){
    return {
        getFlashCards: function(category){
            var queryParams = {};
            if(category){
                queryParams.category = category;
            }
            return $http({
                'method': "GET", 
                'params': queryParams,
                'url': '/cards'
            }).then(function(response){
                return response.data
            })
        }
    };
});