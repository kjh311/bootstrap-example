var app = angular.module("myApp", []);


// Start from specific index in array:
  app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
  });

  app.controller("myCtrl", ['$scope', function($scope) {
    $scope.articles = [
            {
                'title':'Sub-Article #1 Title',
                'author':'Author #1',
                'image': "img/blue.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #2 Title',
                'author':'Author #2',
                'image': "img/board.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #3 Title',
                'author':'Author #3',
                'image': "img/brain.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #4 Title',
                'author':'Author #4',
                'image': "img/chip.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #5 Title',
                'author':'Author #5',
                'image': "img/cyborg.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #6 Title',
                'author':'Author #6',
                'image': "img/dish.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #7 Title',
                'author':'Author #7',
                'image': "img/eye.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #8 Title',
                'author':'Author #8',
                'image': "img/globe.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #9 Title',
                'author':'Author #9',
                'image': "img/hands.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #10 Title',
                'author':'Author #10',
                'image': "img/keyboard.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #11 Title',
                'author':'Author #11',
                'image': "img/lock.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #12 Title',
                'author':'Author #12',
                'image': "img/map.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #13 Title',
                'author':'Author #13',
                'image': "img/mrDNA.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #14 Title',
                'author':'Author #14',
                'image': "img/rainbow.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #15 Title',
                'author':'Author #15',
                'image': "img/robot.jpg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #16 Title',
                'author':'Author #16',
                'image': "img/satelite.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #17 Title',
                'author':'Author #17',
                'image': "img/sound.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            },
            {
                'title':'Sub-Article #18 Title',
                'author':'Author #18',
                'image': "img/steve-jobs.jpeg",
                'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt amet totam officia similique perferendis, eius minus, eligendi, sint odio animi. Sequi, odit, cum. Tenetur quisquam, est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia culpa deleniti recusandae exercitationem sortum bastium.'
            }
            ];
}]);
