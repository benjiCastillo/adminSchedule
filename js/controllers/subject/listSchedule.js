app.controller('listScheduleController', ['$scope', '$firebaseArray', '$firebaseObject','$routeParams',function($scope, $firebaseArray, $firebaseObject,$routeParams){
    
	const rootRef = firebase.database().ref();
    
    //data subject
	const refSub = rootRef.child('subject');
    const dataSchedule = refSub.child($routeParams.id);
    $scope.valueSchedule = $firebaseObject(dataSchedule);
    console.log($scope.valueSchedule);
    //data schedule
    const keySchedule = refSub.child($routeParams.id).child('schedule');
   // const valueSchedule = $firebaseObject(keySchedule);
    $scope.values = $firebaseArray(keySchedule);
    console.log($scope.values);

    $scope.removeSchedule = function(id) {
        var ref = keySchedule.child(id);
        var value = $firebaseObject(ref);
        value.$remove();
      };
    

}]);  