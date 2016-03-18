var todoApp = angular.module('TodoApp');

var ToDo = function(task, done) {
  this.task = task;
  this.done = done || false;
  this.buttonClass = 'btn-danger';
  this.buttonLabel = 'pending';

  this.done && this.completed();
}

ToDo.prototype.completed = function() {
  this.done = true;
  this.buttonClass = 'btn-success';
  this.buttonLabel = 'completed';
}

todoApp.controller('TodosController', ['$scope', function($scope){
  $scope.todos = [
    new ToDo("build an awesome todo list"),
    new ToDo("become an AngularJS master", true),
    new ToDo("have a Shoyu ramen for dinner"),
    new ToDo("watch Daredevil Season 2 Episode 1 tonight"),
    new ToDo("buy a cup of coffee")
  ];

  $scope.newTodo = new ToDo('');

  $scope.addTodo = function() {
    $scope.todos.push(new ToDo($scope.newTodo.task));
    $scope.newTodo.task = '';
  }

}]);