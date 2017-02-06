angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,$location) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.chatd=function(path){
      $location.path(path);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

  var crop_btn = document.querySelector("#crop_btn");
            var crop_result = document.querySelector("#crop_result");
            var crop_circle_btn = document.querySelector("#crop_circle_btn");

            function showToolPanel() {
                crop_btn.style.display = "inline-block";
                crop_result.style.display = "block";
                crop_circle_btn.style.display = "inline-block";
            }

            function hideToolPanel() {
                crop_btn.style.display = "none";
                crop_result.style.display = "none";
                crop_circle_btn.style.display = "none";
                crop_result.innerHTML = "";
            }

            new AlloyFinger(crop_btn, {
                tap: function () {
                    hideToolPanel();
                    new AlloyCrop({
                        image_src: "img/mike.png",
                        width: 300,
                        height: 200,
                        ok: function (base64, canvas) {
                            crop_result.appendChild(canvas);
                            crop_result.querySelector("canvas").style.borderRadius = "0%";
                            showToolPanel();
                        },
                        cancel: function () {
                            showToolPanel();
                        }
                    });

                }
            });

            new AlloyFinger(crop_circle_btn, {
                tap: function () {
                    hideToolPanel();
                    new AlloyCrop({
                        image_src: "img/mike.png",
                        circle: true,
                        width: 200,
                        height: 200,
                        ok: function (base64, canvas) {
                            crop_result.appendChild(canvas);
                            crop_result.querySelector("canvas").style.borderRadius = "50%";
                            showToolPanel();
                        },
                        cancel: function () {
                            showToolPanel();
                        }
                    });
                }
            });

})


.controller('pictureCtrl', function($scope,actionImgShow) {

  var allimgs = [
      {
        imgsrc: 'img/adam.jpg'
      },
      {
        imgsrc: 'img/ben.png'
      },
      {
        imgsrc: 'img/ionic.png'
      },
      {
        imgsrc: 'img/max.png'
      }

    ];

    $scope.imgs = allimgs;
  
    var arr = new Array();
    for(var i=0; i<allimgs.length; i++) {

      var img = new Image();

      img.src = allimgs[i].imgsrc;

      img.onload = function(i) {
        arr[i] = img;
      }(i);
      
    }
  //使用该服务
    $scope.onDoubleTap = function($index) {
      console.log($index)
      actionImgShow.show({
        "larImgs":arr,
        //"larImgs":allimgs 也可以这样子实现没有预加载的图片数组
        "currentImg":$index,
        imgClose : function() {
            actionImgShow.close();
        }
      });
    }
})



.controller('affixCtrl', function($scope) {
  $scope.groups = [];
   for (var i = 0; i < 100; i++) {
     $scope.groups.push(i);
   }

   $scope.items = [0, 1, 2, 3];
})



.controller('elasticImageCtrl', function($scope) {
})

.controller('dragItemCtrl', function($scope) {
  
      $scope.onReorder = function (fromIndex, toIndex) {
        var moved = $scope.contacts.splice(fromIndex, 1);
        $scope.contacts.splice(toIndex, 0, moved[0]);
    };
  
    $scope.contacts = [
        { name: 'Frank', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Susan', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Emma', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Scott', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Bob', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Olivia', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Anne', img: 'http://placehold.it/82x132', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' }
    ];
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
