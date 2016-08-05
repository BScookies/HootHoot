angular.module('chatController',['theApp'])

.controller('chatController', ['$scope', '$window', '$location', 'socket', 'store', function($scope, $window, $location, socket, store) {

  // using store exclusively for now..
  $scope.chatMessage = {
    'senderId': store.get('profile').clientID,
    'recipientId': store.get('profile').clientID,
    'message': '',
    'originChannel': '',
    'channels': [],
    'name': store.get('profile').name
  };

  $scope.messages = [];

  $scope.logout = function() {
  store.remove('profile');
  store.remove('token');
  $location.path('/login');
  };

  $scope.sendMsg = function() {
    socket.emit('send message', $scope.chatMessage)
  }

  socket.on('get message', function (data) {
    $scope.messages.push(data);
    $scope.$digest();
  })

}]);
