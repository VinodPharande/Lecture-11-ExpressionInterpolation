(function(){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  // 1. Attach $inject property to the function obejct more effidient way
  MsgController.$inject = ['$scope'];

  function MsgController($scope) {
    $scope.message = "Vinod";

    $scope.displayMessage = function () {
      console.log('hi');
      return 'Your Registration has been done successfully...!';
    }
  }
})();
