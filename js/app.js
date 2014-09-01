'use strict';

/*App Module */

var gameApp = angular.module('gameApp', [	
	'ngRoute',
	'gameApp.controller',
	'gameFilter',
	'ui.bootstrap',
	'truncate'
	]);

	gameApp.config(['$routeProvider',
		function($routeProvider){
			$routeProvider.
			when('/games', {
				templateUrl: 'partials/game-list.html',
				controller: 'GameListCtrl'
			}).
			when('/games/:gameId', {
				templateUrl: 'partials/game-details.html',
				controller: 'GameDetailCtrl'
			}).
			when('/articles', {
				templateUrl: 'partials/articles-list.html',
				controller: 'ArticleListCtrl'
			}).
			when('/articles/:gameName', {
				templateUrl: 'partials/articles-list.html',
				controller: 'ArticleListCtrl'
				
			}).
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			}).
			otherwise({
				redirectTo: '/'
			});
		}]);




