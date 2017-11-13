
app.controller('AddTimeTableController', ['$scope', '$firebaseArray', '$location','$routeParams','$firebaseObject', function($scope, $firebaseArray, $location,$routeParams,$firebaseObject){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);

    const key = refSub.child($routeParams.id).child('schedule');

	const valuesTimes = $firebaseArray(key);	
    //data
    const dataSchedule = refSub.child($routeParams.id);
    $scope.valueSchedule = $firebaseObject(dataSchedule);
	console.log($scope.valueSchedule);
	


	$scope.addTimetable = function(){
	var	idSchedule = $scope.valueSchedule.$id;

		console.log($scope);
		valuesTimes.$add({
			classroom:$scope.value.classroom,
			init:$scope.value.init,
			finish:$scope.value.finish,
			day:$scope.value.day
		})
	
		console.log($location.path('/listScheduleSubject/'+idSchedule));
	}

}]);


