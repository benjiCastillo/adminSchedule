app.controller('AddAsistantController', ['$scope', '$firebaseArray', '$location','$routeParams','$firebaseObject', function($scope, $firebaseArray, $location,$routeParams,$firebaseObject){
	
	const rootRef = firebase.database().ref();
	const value = $firebaseArray(rootRef);
	const refSub = rootRef.child('subject');
	const values = $firebaseArray(refSub);

    const key = refSub.child($routeParams.id).child('assistance');
	const valuesTimes = $firebaseArray(key);	
    //data
    const dataSchedule = refSub.child($routeParams.id);
    $scope.valueSchedule = $firebaseObject(dataSchedule);
    console.log($scope.valueSchedule);
   

	$scope.addAsistance = function(){
		console.log($scope);
		valuesTimes.$add({
			name:$scope.value.name,
			email:$scope.value.email,
			phone:$scope.value.phone
		})
		$location.path('/');
	}

}]);


