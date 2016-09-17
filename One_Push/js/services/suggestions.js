app.factory('suggestions', ['$http', '$window' ,function($http, $window) {

  var URL = "https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites"; 
  return{
    getData : function() {
        return $http({
            url: URL,
            method: 'GET'
        })
    }
 }
  
}]);

