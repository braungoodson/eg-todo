angular
	.module('app',[])
	.provider('appProvider',[function(){this.$get=[function(){return new appProvider();}];function appProvider(){}}])
	.service('appService',[function(){return{};}])
	.factory('appFactory',[function(){return{};}])
	.directive('appDirective',[function(){return{};}])
;

angular
	.module('egTodo',['ngCookies'])
	.controller('egTodoController',['$scope','$cookies',function($scope,$cookies){
    $scope.todo = JSON.parse($cookies.todo||JSON.stringify({todo:'something awesome',items:[]}));
    $scope.add = function (item) {
      $scope.todo.items.push(item);
      $cookies.todo = JSON.stringify($scope.todo);
    }
    $scope.remove = function (index) {
      $scope.todo.items.splice(index,1);
      $cookies.todo = JSON.stringify($scope.todo);
    }
    $scope.ok = function ($index) {
      if ($scope.todo.items[$index].ok) {
        $scope.todo.items[$index].ok = false;
      } else {
        $scope.todo.items[$index].ok = true;
      }
      $cookies.todo = JSON.stringify($scope.todo);
    }
    $scope.warning = function ($index) {
      if ($scope.todo.items[$index].warning) {
        $scope.todo.items[$index].warning = false;
      } else {
        $scope.todo.items[$index].warning = true;
      }
      $cookies.todo = JSON.stringify($scope.todo);
    }
    $scope.fire = function ($index) {
      if ($scope.todo.items[$index].fire) {
        $scope.todo.items[$index].fire = false;
      } else {
        $scope.todo.items[$index].fire = true;
      }
      $cookies.todo = JSON.stringify($scope.todo);
    }
	}])
;
