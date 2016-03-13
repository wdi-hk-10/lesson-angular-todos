var todoApp = angular.module('TodoApp');

todoApp.controller('TodosController', ['$scope', function($scope){
  $scope.todos = [
    {task: "build an awesome todo list", done: false},
    {task: "become an AngularJS master", done: false},
    {task: "have a Shoyu ramen for dinner", done: false},
    {task: "watch Daredevil Season 2 Episode 1 tonight", done: false},
    {task: "buy a cup of coffee", done: false}
  ];

  $scope.newTodo = {task: '', done: false};

  $scope.addTodo = function() {
    $scope.todos.push({task: $scope.newTodo.task, done: false});
    $scope.newTodo.task = '';
  }

}]);