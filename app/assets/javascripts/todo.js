(function() {
  "use strict";
  angular.module("app").controller("todoCtrl",
    function($scope){
    $scope.tasks = ["walk the dog", "buy milk", "clean the room"];

    $scope.addTask = function(task) {
     if (task){ // task is not emptry string, so truthy
        $scope.tasks.push(task); // add more message to the array
        $scope.newTask = null;  // reset search bar to empty
      } else {
        alert("Enter a task");
      }
    }

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1);  // splice by index, length = 1
    }

    $scope.isPositive = function(task) {
      return task.indexOf("stupid") === -1; //data is added, but words with "stupid" won't show because the whole task...d") is false
    }

    window.$scope = $scope; // attach to DOM for debugging
  });
})();


 $scope.reviews = [
    {
      text: "I love Angular",
      rating: 5
    },

    {
      text: "I like Python",
      rating: 4
    },

    {
      text: "Ruby is so-so",
      rating: 3
    }
  ];

