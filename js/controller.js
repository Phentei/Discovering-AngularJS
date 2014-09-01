'use strict';

/*Controller*/

angular.module('gameApp.controller', [])
	.controller('GameListCtrl', ['$scope', '$http',
		function($scope, $http) {
		$http.get('games/games.json').success(function(data){
			$scope.games = data;
		});

		$scope.orderGame = 'year';
	}])
	.controller('GameDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('games/' + $routeParams.gameId + '.json').success(function(data) {
			$scope.game = data;			
			$scope.mainImageUrl = data.mainImg;
		})

		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}
		
	}]).controller('ArticleListCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http){

	$http.get('articles/articles.json').success(function(data){
		$scope.articles = data;
	});

	$scope.orderArticle = 'date';
	$scope.query = $routeParams.gameName || '';	
	
}]).controller('HomeController', ['$scope', '$http',
	function($scope, $http) {
	$http.get('games/games.json').success(function(games){
		$scope.games = games;
		$scope.myInterval = 3000;
		$scope.slides = [];
		angular.forEach(games, function(game, key) {
       		$scope.slides.push({image : game.imgUrl, text : game.name, id : game.id});
     	});		
		
	});

	$http.get('articles/articles.json').success(function(data){
		$scope.articles = data;
	});
	$scope.orderArticle = 'date';

}]);