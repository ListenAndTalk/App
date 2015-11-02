var app = angular.module('app');

app.controller('navCtrl', function ($scope, $location) {
    $scope.init = function () {
        $scope.navList = [
            {name: "Home", state: "home", href: "./"},
            {name: "Mark Attendance", state: "markAttendance", href: "#/markAttendance"},
            {name: "View Attendance", state: "viewAttendance", href: "#/viewAttendance"},
            {name: "Settings", state: "settings", href: "#/settings"},
            {name: "Activity", state:"activity", href: "#/activity"},
            {name: "Add New Staff", state: "newstaff", href: "#/newstaff"},
            {name: "Add New Student", state: "newstudent", href: "#/newstudent"}
        ];
    };

 });
