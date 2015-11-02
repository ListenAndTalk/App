var app = angular.module('app');

app.controller('homeCtrl', function($scope, mainFactory, auth, store, $window, $state) {
  $scope.auth = auth;
  

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $window.location.reload();
  };

  // $scope.post = function() {
  //   mainFactory.test_post($scope.postData, function(result) {
  //     console.log(result);
  //   });
  // }
  
  //auth.profile.email
  mainFactory.getActivityByTeacherEmail((auth.profile) ? auth.profile.email : "staff1@example.com", function(result) {
    $scope.activityNames = result;
  });
    
   mainFactory.getAllStudents(function(result) {
       //var studentarray = [];
       //for (var index = 0; index < result.length; index++){
       //    studentarray[index] = result[index].value;
       //    studentarray[index].name = studentarray[index].name_first
       //        + " " + studentarray[index].name_last;
       //}
       //$scope.students = studentarray;
       //console.log(studentarray);

       $scope.students = result;
       console.log(result);
  });


    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.formats = ['longDate', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.open = function($event) {
        $scope.status.opened = true;
    };

    $scope.status = {
        opened: false
    };


});
