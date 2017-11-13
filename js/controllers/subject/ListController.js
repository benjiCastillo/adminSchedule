app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject',function($scope, $firebaseArray, $firebaseObject){
  
$scope.loaderInfo = false;

  var loadData = function(){
    const rootRef = firebase.database().ref();
    const values = rootRef.child('subject');
    $scope.values = $firebaseArray(values);
    var obj = $firebaseObject(rootRef);
    $scope.loaderInfo = true;
    console.log("cargando...")
    
    obj.$loaded()
    .then(function(data){
      if(data === obj){
        $scope.loaderInfo = false;
      }
      //console.log(data === obj); // true
    })
    .catch(function(error){
      console.log("error : ",error);
      $scope.loaderInfo = false;
    })
  
  }

  loadData();

  $scope.removeSubject = function(id) {
    var ref = values.child(id);
    var value = $firebaseObject(ref);
    value.$remove();
  };

}]);

// app.filter("booleanFilter", function filtroBooleanos () {
//   return function (input) {
//     if(input === false || input == 0){
//       return "Cerrado";
//     }else if(input === true || input == 1){
//       return "Disponible"
//     }
//   }
// });
