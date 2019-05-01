'use strict';
var app = angular.module("myApp",['ngRoute','nvd3',]);

app.config(['$routeProvider',function($routeProvider){
$routeProvider
.when('/',{
    templateUrl:'view/home.html',
    controller: homeController,
})
.when('/computer',{
    templateUrl:'view/computer.html',
    controller: computerController,
})

// $http({
//   method:'GET',
//   url:'json/data.json'
// }).then(function(response){
//    function getdata(){
//      console.log(response);
//      return response.data2;
//    }
//         $scope.data = [
//             {
//                 "key" : "label" ,
//                 "bar": true,
//                 "values" :getdata() 
//             }];
// })
}])
 

