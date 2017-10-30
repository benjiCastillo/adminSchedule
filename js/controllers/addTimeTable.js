app.controller('AddTimeTableController', ['$scope', '$firebaseArray', '$location','$routeParams', function($scope, $firebaseArray, $location,$routeParams){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);

    const key = refSub.child($routeParams.id).child('schedule');
	
	const valuesTimes = $firebaseArray(key);	



	$scope.addTimetable = function(){
		console.log($scope);
		valuesTimes.$add({
			classroom:$scope.value.classroom,
			init:$scope.value.init,
			finish:$scope.value.finish,
			day:$scope.value.day
		})
		$location.path('/');
	}

}]);


