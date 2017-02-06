angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '图片裁剪',
    url: '/tab/chats/1',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '图片预览',
    url: '/tab/picture',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '滑动子header',
    url: '/tab/affix',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '背景弹性图片',
    url: '/tab/elasticImage',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '可拖动排序item',
    url: '/tab/dragItem',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
