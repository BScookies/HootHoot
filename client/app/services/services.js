angular.module('services', [])
  .factory('socket', function () {
    return io.connect();
  })
  .factory('Globals', function () {
    var userId = +localStorage.getItem('userId');
    console.log('id: ', userId)
    var selections = {};

    var setSelectedRecipient = function (recipient) {
      selections.recipient = recipient;
    }

    return {
      selections: selections,
      setSelectedRecipient: setSelectedRecipient,
      userId: userId
    }
  })
  .factory('ContactService', ['$http', '$rootScope',
    function ContactServiceFactory ($http, $rootScope) {
      var contacts = [];

      var createContact = function(newContactEmail) {
        return $http({
          method: 'POST',
          url: '/contacts',
          headers: {'Content-Type': 'application/json'},
          data: {newContactEmail: newContactEmail}
        })
        .then(function (resp){
          contacts.push(resp.data);
        })
        .catch(function(resp){
          console.log("THIS IS AN ERROR" + JSON.stringify(resp.data));
        });
      };

      var getAllContacts = function() {
        return $http({
          method: 'GET',
          url: '/contacts',
          headers: {'Content-Type': 'application/json'},
        })
        .then(function (resp){
          for (var i = 0; i < resp.data.length; i++) {
            contacts.push(resp.data[i]);
          }
        });
      };

      var deleteContact = function(contactId) {
        return $http({
          method: 'DELETE',
          url: '/contacts',
          headers: {'Content-Type': 'application/json'},
          data: { contact: contactId }
        })
        .then(function (resp){
          for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id === resp.data) {
              contacts.splice(i, 1);
              break;
            }
          }
        });
      };

      return {
        contacts: contacts,
        createContact: createContact,
        getAllContacts: getAllContacts,
        deleteContact: deleteContact
      };
    }
  ])
  .factory('MessageService', ['$http', '$rootScope', 'currentUser', 'socket',
    function MessageServiceFactory($http, $rootScope, currentUser, socket, store){
      var chats = [];

      var getRecentMessages = function () {
        return $http({
          method: 'GET',
          url: '/message',
          headers: {'Content-Type': 'application/json'},
        })
        .then(function(resp) {
          resp.data.forEach(function(message) {
            chats.push(message);
          })
          console.log(chats);
        })
      }

      var sendMessage = function(sender, recipient, messageText) {
        var message = {
          'senderId': sender,
          'recipientId': recipient,
          'body': messageText,
          'recipientType': 'U'
        }

        socket.emit('send message', message);
      };

      socket.on('get message', function (message) {
        chats.push(message);
      });

      return {
        sendMessage: sendMessage,
        getRecentMessages: getRecentMessages,
        chats: chats
      };
    }
  ]);
