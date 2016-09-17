app.controller('TagController', ['$scope', '$routeParams', 'suggestions', '$window',
 function($scope, $routeParams, suggestions, $window) {
  $scope.currentTag = $routeParams.tag;

  
  $scope.tagFilter = function(tag){
    if(tag.toLowerCase() === $scope.currentTag.toLowerCase())
      return false;
    else return true;
  };
  $scope.upVote = function(id) {
          if($window.localStorage.getItem(id))
            {var value = parseInt($window.localStorage.getItem(id));
                        $window.localStorage.setItem(id, value + 1);
                        $scope.upvotes[id]=value+1;
                     }
             else return;
        };
 }]);