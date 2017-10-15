app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseArray', '$firebaseObject',
function($scope, $location, $routeParams, $firebaseArray, $firebaseObject){
    $scope.formData = {};
// var ref = new Firebase(FBURLN + $routeParams.id);
// $scope.value = $firebaseObject(ref);

const rootRef = firebase.database().ref();
const ref = rootRef.child('parking');
const refChild = ref.child($routeParams.id);
$scope.value = $firebaseObject(refChild);
console.log($scope.value);


$scope.editTaxi = function() {

    $scope.value.$save({
        name: $scope.value.name,
        address: $scope.value.address,
        spaces_quantity: $scope.value.spaces_quantity,
        latitude: parseFloat($scope.value.latitude),
        longitude: parseFloat($scope.value.longitude),
        status: $scope.value.status,
        working_hours: $scope.value.working_hours
    });
    $scope.edit_form.$setPristine();
    $scope.value = {};
    $location.path('/');
};
 
}]);

