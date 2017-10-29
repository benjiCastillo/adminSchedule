app.controller('AddController', ['$scope', '$firebaseArray', '$location','$routeParams', function($scope, $firebaseArray, $location,$routeParams){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);
	//child subject add schudule
	
	const key = refSub.child($routeParams.id).child('schedule');
	
	const valuesTimes = $firebaseArray(key);	




	$scope.addSubject = function() {
		values.$add({
			acronym: $scope.value.acronym,
			name: $scope.value.name,
			teacher: $scope.value.teacher
		});
		$location.path('/');
	}

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


