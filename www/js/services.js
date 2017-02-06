angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'south indian',
    lastText: 'Try the rice and curry',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'North Indian',
    lastText: 'Get a taste of bread and spicy curries',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Indo Chinese',
    lastText: '',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Pizza',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Specialities',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];


var menuItems = [{
    id: 0,items: [{id: 0,item_Id: 000,name: 'Molaga bajji',lastText: 'spice warning',face: 'img/ben'},
    {id: 0,item_Id: 001, name: 'Vadai',lastText: 'deep fried donught shapped spicy dish',face: 'img/bepng'},
    {id: 0,item_Id: 002,name: 'Masala poori',lastText: 'mouth watering evening snacks',face: 'img/ben'}]
  }, {
    id: 1,
    name: 'Pongal',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }];


  

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {

      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id === parseInt(chatId)) {
          return menuItems[i].items;
        }
      }
      return null;
    }

 


  };
});
