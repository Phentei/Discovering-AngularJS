'use strict';


/*Filter*/


angular.module('gameFilter', []).filter('activity', function(){
	return function(input){
		return input ? '\u2713' : '\u2718';
	};
});